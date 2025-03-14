import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

export default function signup() {
  const router = useRouter();
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isPasswordShown1, setIsPasswordShown1] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        style={{ flex: 1, marginHorizontal: 22 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginVertical: 22 }}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              marginVertical: 12,
              color: Colors.black,
            }}
          >
            Create Account
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
            }}
          >
            Connect with your Academic friend today!
          </Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 2,
            }}
          >
            Name
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
              placeholder="Enter your name"
              placeholderTextColor={Colors.black}
              style={{
                width: "100%",
              }}
              //   onChangeText={(text) => handleChange(text, "name")}
              cursorColor={Colors.primary}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 2,
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
              autoCapitalize="none"
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
              {isPasswordShown ? (
                <Ionicons name="eye-off" size={24} color={Colors.black} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 2,
            }}
          >
            Confirm Password
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
              placeholder="Enter your confirm password"
              placeholderTextColor={Colors.black}
              secureTextEntry={!isPasswordShown1}
              style={{
                width: "100%",
              }}
              //   onChangeText={(text) => handleChange(text, "password2")}
              cursorColor={Colors.primary}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown1(!isPasswordShown1)}
              style={{
                position: "absolute",
                right: 12,
              }}
            >
              {isPasswordShown1 ? (
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

          <Text>I agree to the terms and conditions</Text>
        </View>

        <Button
          title="Sign Up"
          filled
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}
          //   onPress={() => SignUp()}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22,
          }}
        >
          <Text style={{ fontSize: 16, color: Colors.black }}>
            Already have an account
          </Text>
          <Pressable onPress={() => router.push("/(auth)/login")}>
            <Text
              style={{
                fontSize: 16,
                color: Colors.primary,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
