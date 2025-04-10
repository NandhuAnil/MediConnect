import React, { useEffect } from "react";
import {
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import useUser from "@/hooks/useUser";

interface User {
  _id: string;
  name: string;
  email: string;
}

export default function UserListScreen() {
  const { currentUser, allUsers, loading, getAllUsers } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      getAllUsers();
    }
  }, [currentUser]);

  const handleUserPress = (user: User) => {
    if (!user?._id) return;

    router.push({
      pathname: "/(tabs)/chat",
      params: {
        receiverId: user._id,
        receiverName: user.name,
      },
    });
  };

  const filteredUsers = allUsers.filter(
    (user: User) => user._id !== currentUser?._id
  );

  if (loading || !currentUser) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <FlatList
      data={filteredUsers}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => handleUserPress(item)}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.email}>{item.email}</Text>
          <Text style={styles.email}>{item._id}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    padding: 20,
  },
  card: {
    backgroundColor: "#eef2f7",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
});
