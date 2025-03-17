import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useLocalSearchParams, router } from "expo-router";

interface DoctorData {
  doctorName: string;
  amountPerHour: number;
  Specialist: string;
  availableSlots: number;
  rating: number;
  image: string;
}

interface ScrollProps {
  scrollType: "horizontal" | "vertical";
  doctorData?: DoctorData[];
}

const GenralDoctorList: React.FC<ScrollProps> = ({
  scrollType,
  doctorData,
}) => {
  const { data } = useLocalSearchParams<{ data: string }>();
  const parsedData: DoctorData[] = doctorData || (data ? JSON.parse(data) : []);

  if (!parsedData.length) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  const renderCard = ({ item }: { item: DoctorData }) => (
    <TouchableOpacity
      style={[
        styles.card,
        {
          flexDirection: scrollType === "horizontal" ? "column" : "row",
          justifyContent: "space-evenly",
        },
      ]}
      onPress={() =>
        router.push({
          pathname: "/(booking)/bookAppointement",
          params: {
            doctorData: JSON.stringify(item),
          },
        })
      }
    >
      <Image
        source={{ uri: item.image }}
        style={[
          styles.image,
          {
            width: scrollType === "horizontal" ? "100%" : "35%",
            height: scrollType === "horizontal" ? 150 : 130,
          },
        ]}
      />
      <View
        style={[
          styles.rating,
          { left: scrollType === "horizontal" ? 20 : 260 },
        ]}
      >
        <Text style={{ fontSize: 14, fontWeight: "700" }}>
          ⭐ {item.rating}
        </Text>
      </View>
      <View
        style={[styles.Fav, { left: scrollType === "horizontal" ? 20 : 130 }]}
      >
        <MaterialIcons name="verified" size={24} color={Colors.primary} />
        <Text style={{ color: Colors.primary }}>Verified</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text
          style={[
            styles.title,
            { marginLeft: scrollType === "horizontal" ? 0 : 15 },
          ]}
        >
          {item.doctorName}
        </Text>
        {scrollType !== "horizontal" && (
          <Text style={{ marginLeft: 15, top: 35 }}>{item.Specialist}</Text>
        )}
        {scrollType === "horizontal" && (
          <>
            <View
              style={{
                borderBottomColor: Colors.text,
                borderBottomWidth: 0.3,
                opacity: 0.5,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                margin: 10,
              }}
            >
              <View style={styles.menu}>
                <AntDesign
                  name="clockcircle"
                  size={22}
                  color={Colors.primary}
                />
                <Text style={{ fontSize: 18 }}>5 Mins</Text>
              </View>
              <View style={styles.menu}>
                <FontAwesome name="car" size={22} color={Colors.primary} />
                <Text style={{ fontSize: 18 }}>
                  {item.availableSlots} Spots
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={parsedData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderCard}
      contentContainerStyle={styles.list}
      horizontal={scrollType === "horizontal"}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={scrollType === "horizontal"}
    />
  );
};

export default GenralDoctorList;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    // marginHorizontal: 8,
    marginVertical: 8,
  },
  image: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "column",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
    top: 40,
    width: 200,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: "#444",
  },
  list: {
    paddingBottom: 16,
  },
  rating: {
    position: "absolute",
    top: 120,
    left: 20,
    backgroundColor: Colors.background,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
  },
  Fav: {
    position: "absolute",
    top: 10,
    right: 20,
    padding: 5,
    borderRadius: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderColor: Colors.iconBg,
    borderWidth: 1,
  },
  titleTag: {
    backgroundColor: Colors.gray,
    borderRadius: 5,
    marginRight: 220,
    marginBottom: 5,
  },
  Tag: {
    color: Colors.primary,
    padding: 3,
    borderRadius: 5,
    fontSize: 12,
    alignSelf: "center",
    fontWeight: "bold",
  },
  Amount: {
    position: "absolute",
    top: -20,
    right: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  amtContent: {
    fontSize: 26,
    fontWeight: "600",
    color: Colors.primary,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 5,
  },
});
