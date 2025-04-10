import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

import { connectDB } from "./db/connectDB.js";
import authRoutes from './routers/auth.routes.js';
import bookingRoutes from './routers/booking.routes.js';
import userRoutes from './routers/user.routes.js';
import chatRoutes from './routers/chat.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 3000;

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO to HTTP server
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:8081",
      "exp://192.168.43.123:8081",
      "http://192.168.43.123:8081",
      "http://127.0.0.1:5500"
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

// Store connected users with their socketId
const users = new Map();

// Middleware
app.use(cors({
  origin: [
    "http://localhost:8081",
    "exp://192.168.43.123:8081",
    "http://192.168.43.123:8081",
    "http://127.0.0.1:5500"
  ],
  credentials: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/booking", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);

  // Register user by ID
  socket.on("register", (userId) => {
    users.set(userId, socket.id);
    console.log("User registered:", userId);
  });

  // Handle sending private messages
  socket.on("private_message", ({ sender, receiver, message }) => {
    const receiverSocketId = users.get(receiver);
    console.log(`Message from ${sender} to ${receiver}: ${message}`);

    if (receiverSocketId) {
      io.to(receiverSocketId).emit("receive_message", {
        sender,
        receiver,
        message,
        timestamp: new Date(),
      });
    }
  });
  socket.on("typing", ({ sender, receiver }) => {
    const receiverSocketId = users.get(receiver);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("typing", { sender });
    }
  });
  
  // Remove disconnected users
  socket.on("disconnect", () => {
    for (let [userId, socketId] of users.entries()) {
      if (socketId === socket.id) {
        users.delete(userId);
        console.log("User disconnected:", userId);
        break;
      }
    }
  });
});

// Start server only after DB connection
server.listen(PORT, async () => {
  await connectDB();
  console.log("Server is running on port:", PORT);
});
