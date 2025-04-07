import { Message } from "../models/messageModel.js";

// Save a message
export const sendMessage = async (req, res) => {
  const { sender, receiver, message } = req.body;

  try {
    const newMsg = new Message({ sender, receiver, message });
    await newMsg.save();
    res.status(201).json(newMsg);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

// Get all messages between two users
export const getMessages = async (req, res) => {
  const { user1, user2 } = req.params;

  try {
    const messages = await Message.find({
      $or: [
        { sender: user1, receiver: user2 },
        { sender: user2, receiver: user1 },
      ],
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
