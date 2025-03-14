import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Button from "@/components/Button";
import Checkbox from "expo-checkbox";
import { useRouter } from "expo-router";

export default function login() {
  const router = useRouter();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: Colors.black,
            }}
          >
            Hi Welcome Back ! 👋
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
            }}
          >
            Hello again you have been missed!
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Email address
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: Colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Colors.black}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
              //   onChangeText={(text) => handleChange(text, "email")}
              cursorColor={Colors.primary}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
            }}
          >
            Password
          </Text>

          <View
            style={{
              width: "100%",
              height: 48,
              borderColor: Colors.black,
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: 22,
            }}
          >
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Colors.black}
              secureTextEntry={!isPasswordShown}
              style={{
                width: "100%",
              }}
              //   onChangeText={(text) => handleChange(text, "password")}
              cursorColor={Colors.primary}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={Colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginVertical: 6,
          }}
        >
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? Colors.primary : undefined}
          />

          <Text>Remember Me</Text>
        </View>

        <Button
          title="Login"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
            onPress={() => router.push('/(tabs)')}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: Colors.black }}>
            Don't have an account ?{" "}
          </Text>
          <Pressable
            onPress={() => router.push("/(auth)/signup")}
          >
            <Text
              style={{
                fontSize: 16,
                color: Colors.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Register
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
