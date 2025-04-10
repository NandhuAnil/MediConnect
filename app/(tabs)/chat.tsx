import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { io } from "socket.io-client";
import useUser from "@/hooks/useUser";

const API_URL = "https://appsail-50025457430.development.catalystappsail.in";
const socket = io(API_URL);

type MessageType = {
  type: "sent" | "received";
  text: string;
  timestamp: string;
};

const ChatScreen = () => {
  const { receiverId, receiverName } = useLocalSearchParams<{
    receiverId: string;
    receiverName: string;
  }>();
  const { currentUser } = useUser();
  const myId = currentUser?._id;

  const [messages, setMessages] = useState<MessageType[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const typingHandler = ({ sender }: { sender: string }) => {
      if (sender === receiverId) {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 3000);
      }
    };
  
    socket.on("typing", typingHandler);
    return () => {
      socket.off("typing", typingHandler);
    };
  }, [receiverId]);

  
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch(`${API_URL}/api/chat/history/${myId}/${receiverId}`);
        const data = await res.json();

        const formatted: MessageType[] = data.map((msg: any) => ({
          type: msg.sender === myId ? "sent" : "received",
          text: msg.message,
          timestamp: new Date(msg.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));

        setMessages(formatted);
      } catch (error) {
        console.log("Error fetching messages:", error);
      }
    };

    if (myId && receiverId) {
      fetchMessages();
    }
  }, [myId, receiverId]);

  useEffect(() => {
    if (myId) {
      const timeout = setTimeout(() => {
        socket.emit("register", myId);
      }, 100); // slight delay helps with socket connection race
      return () => clearTimeout(timeout);
    }
  }, [myId]);

  useEffect(() => {
    const handler = ({ sender, receiver, message }: any) => {
      console.log("📥 Message received via socket:", { sender, receiver, message });
    
      if (!receiver || receiver !== myId || sender !== receiverId) return;
    
      const received: MessageType = {
        type: "received",
        text: message,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
    
      setMessages((prev) => [...prev, received]);
    
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    };
  
    socket.on("receive_message", handler);
  
    // 👇 wrap the cleanup function like this
    return () => {
      socket.off("receive_message", handler);
    };
  }, [myId, receiverId]);

  useEffect(() => {
    const reconnectHandler = () => {
      console.log("🔄 Reconnected");
      socket.emit("register", myId);
    };
  
    socket.on("connect", reconnectHandler);
  
    return () => {
      socket.off("connect", reconnectHandler);
    };
  }, [myId]);

  const sendMessage = async () => {
    if (!input.trim() || !myId || !receiverId) return;

    const newMsg: MessageType = {
      type: "sent",
      text: input,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMsg]);

    // Emit to socket
    socket.emit("private_message", {
      sender: myId,
      receiver: receiverId,
      message: input,
    });

    console.log("📤 Sending message:", {
      sender: myId,
      receiver: receiverId,
      message: input,
    });

    // Save to database
    try {
      const res = await fetch(`${API_URL}/api/chat/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sender: myId,
          receiver: receiverId,
          message: input,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        console.log("❌ Backend rejected message:", err);
      } else {
        const data = await res.json();
        console.log("✅ Send success:", data);
      }
    } catch (error) {
      console.log("❌ Network or parsing error:", error);
    }

    setInput("");
    flatListRef.current?.scrollToEnd({ animated: true });
  };

  const handleTyping = () => {
    socket.emit("typing", { sender: myId, receiver: receiverId });
  };

  const renderItem = ({ item }: { item: MessageType }) => (
    <View
      style={[
        styles.messageBubble,
        item.type === "sent" ? styles.sent : styles.received,
      ]}
    >
      <Text>{item.text}</Text>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={90}
    >
      <FlatList
        ref={flatListRef}
        data={messages}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ paddingBottom: 10, paddingHorizontal: 10 }}
        onContentSizeChange={() =>
          flatListRef.current?.scrollToEnd({ animated: true })
        }
      />
      {isTyping && (
        <Text style={{ paddingLeft: 10, color: "gray", marginBottom: 5 }}>
          {receiverName} is typing...
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message"
          value={input}
          onChangeText={(text) => {
            setInput(text);
            handleTyping();
          }}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  sent: {
    alignSelf: "flex-end",
    backgroundColor: "#DCF8C6",
    marginRight: 10,
  },
  received: {
    alignSelf: "flex-start",
    backgroundColor: "#EAEAEA",
    marginLeft: 10,
  },
  timestamp: {
    fontSize: 10,
    color: "#666",
    marginTop: 4,
    textAlign: "right",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
});
