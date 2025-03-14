import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

const { height } = Dimensions.get("window");

export default function IndexScreen() {

  const router = useRouter();
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: Colors.primary,
          opacity: 0.1,
          width: 350,
          height: 350,
          position: "absolute",
          right: "-20%",
          top: -140,
          borderRadius: 200,
        }}
      ></View>
      <View
        style={{
          opacity: 0.1,
          width: 400,
          height: 400,
          position: "absolute",
          right: "-15%",
          top: -160,
          borderRadius: 200,
          borderColor: Colors.primary,
          borderWidth: 2,
        }}
      ></View>
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
            marginTop: 100,
            backgroundColor: "transparent",
          }}
          resizeMode="contain"
          source={require("../../assets/images/welcome.png")}
        />
        <View
          style={{
            paddingHorizontal: 10 * 4,
            paddingTop: 10 * 4,
          }}
        >
          <Text
            style={{
              fontSize: 30,
              color: Colors.primary,
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            Medi<Text style={{color: Colors.accent}}>Connect</Text>
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: Colors.text,
              textAlign: "center",
              marginTop: 10 * 2,
            }}
          >
            MediConnect is your trusted healthcare companion, designed to simplify doctor consultations and improve your well-being. With MediConnect, you can easily connect with experienced doctors online and receive expert advice for managing blood pressure (BP), sugar levels, and other health symptoms — all from the comfort of your home.
          </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 10 * 2,
            paddingTop: 10 * 6,
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => router.push("/(auth)/login")}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: 10 * 1.5,
              paddingHorizontal: 10 * 2,
              width: "100%",
              borderRadius: 10,
              shadowColor: Colors.text,
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.25,
              shadowRadius: 6,
              elevation: 6,
              opacity: 0.9,
            }}
          >
            <Text
              style={{
                color: Colors.background,
                fontSize: 16,
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
