import GenralDoctorList from "@/components/GenralDoctorListList";
import { Colors } from "@/constants/Colors";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  useGenralDoctorData,
  useBPDoctorData,
  useSugarDoctorData,
  usePsycoDoctorData,
} from "@/hooks/globalData.service";
import useUser from "@/hooks/useUser";

const user = {
  imageUrl: "",
  fullName: "Lara",
};

const sliderList = [
  {
    id: 0,
    name: "slider 0",
    imageUrl:
      "https://img.freepik.com/free-vector/cartoon-online-medical-conference-illustration_23-2148890693.jpg?w=1380&t=st=1702101054~exp=1702101654~hmac=5ac935c5df5028f889f9e31a0861de2d1832e6f02d5f81676730b8b9eb74e1de",
  },
  {
    id: 1,
    name: "slider 1",
    imageUrl:
      "https://img.freepik.com/free-vector/online-doctor-concept_23-2148526026.jpg?w=1380&t=st=1702101082~exp=1702101682~hmac=8c2e8c1a14e22101c8da5c7ffbbab467a4c559838984ba4763efdaf644858e5d",
  },
  {
    id: 2,
    name: "slider 2",
    imageUrl:
      "https://img.freepik.com/free-vector/psychologist-online-service-platform-mental-health-diagnostic-thoughts-emotions-analysis-online-consultation-vector-flat-illustration_613284-1404.jpg?w=1060&t=st=1702100397~exp=1702100997~hmac=3b035155eb31e4411ef7f70d25757d074c06a4a331665916ae8dfe39c1050fa5",
  },
  {
    id: 3,
    name: "slider 3",
    imageUrl:
      "https://img.freepik.com/free-vector/hospital-reception-scene-with-face-masks_52683-55277.jpg?w=1380&t=st=1702101119~exp=1702101719~hmac=a1f00b1c66096538844ed2e2a86a2be8e66f9c25bf2f2bf43d8357c2c13c3ae2",
  },
  {
    id: 4,
    name: "slider 4",
    imageUrl:
      "https://img.freepik.com/free-vector/online-doctor-concept_23-2148533957.jpg?w=1380&t=st=1702101169~exp=1702101769~hmac=8222feaea864b1a8d95d0fe4e2b61366584f1d2e8d83b45aca8618e7574347eb",
  },
];
const categoryList = [
  {
    id: 1,
    name: "BP",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920349.png",
    route: "/(booking)",
  },
  {
    id: 2,
    name: "Sugar",
    image: "https://cdn-icons-png.flaticon.com/512/2927/2927116.png",
    route: "/(booking)",
  },
  {
    id: 3,
    name: "General",
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063821.png",
    route: "/(booking)",
  },
  {
    id: 4,
    name: "Psychotist",
    image: "https://cdn-icons-png.flaticon.com/512/2750/2750711.png",
    route: "/(booking)",
  },
];

export default function HomeScreen() {
  const router = useRouter();
  const { currentUser } = useUser();
  const { bpSplDoctor } = useBPDoctorData();
  const { genralDoctorData } = useGenralDoctorData();
  const { sugarSplDoctor } = useSugarDoctorData();
  const { psycoSplDoctor } = usePsycoDoctorData();

  const [searchInput, setSearchInput] = useState();
  const photoURL = "";
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateAvatarUrl = (name: string) => {
    const firstLetter = name.charAt(0);
    const backgroundColor = getRandomColor();
    const imageSize = 130;
    return `https://ui-avatars.com/api/?background=${backgroundColor}&size=${imageSize}&color=FFF&font-size=0.60&name=${firstLetter}`;
  };

  return (
    <ScrollView style={{ padding: 20, marginTop: 25 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 17,
            alignItems: "center",
          }}
        >
          <Image
            source={
              photoURL
                ? { uri: photoURL }
                : { uri: generateAvatarUrl(currentUser?.name || user.fullName) }
            }
            style={{ width: 45, height: 45, borderRadius: 99 }}
          />
          <View>
            <Text style={{ fontFamily: "appFont" }}>Hello, 👋</Text>
            <Text style={{ fontSize: 18, fontFamily: "appFont-bold" }}>
              {currentUser?.name}
            </Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </View>
      {/* searchBar */}
      <View style={{ marginTop: 15 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 14,
            borderWidth: 0.8,
            borderColor: Colors.gray,
            paddingVertical: 4,
            paddingHorizontal: 10,
            borderRadius: 30,
          }}
        >
          <AntDesign name="search1" size={24} color={Colors.primary} />
          <TextInput
            placeholder="Search"
            onChangeText={(value: any) => setSearchInput(value)}
            style={{ width: "100%" }}
          />
        </View>
      </View>
      {/* slider */}
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={sliderList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              key={item.id}
              source={{ uri: item.imageUrl }}
              style={{
                width: 300,
                height: 170,
                margin: 10,

                borderRadius: 10,
              }}
            />
          )}
        />
      </View>
      {/* SubHeading */}
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "appFont-semibold" }}>
            Doctor Speciality
          </Text>
          <Text style={{ fontFamily: "appFont", color: Colors.primary }}>
            See All
          </Text>
        </View>
        <FlatList
          data={categoryList}
          numColumns={4}
          columnWrapperStyle={{ flex: 1, justifyContent: "space-between" }}
          scrollEnabled={false}
          keyExtractor={(item) => item.id.toString()}
          style={{ marginTop: 5 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ alignItems: "center" }}
              onPress={() => {
                let dataToPass;
                if (item.name === "BP") {
                  dataToPass = bpSplDoctor;
                } else if (item.name === "Sugar") {
                  dataToPass = sugarSplDoctor;
                } else if (item.name === "General") {
                  dataToPass = genralDoctorData;
                } else if (item.name === "Psychotist") {
                  dataToPass = psycoSplDoctor;
                }

                if (dataToPass) {
                  router.push({
                    pathname: item.route as any,
                    params: { data: JSON.stringify(dataToPass) },
                  });
                }
              }}
            >
              <View
                style={{
                  padding: 15,
                  backgroundColor: Colors.iconBg,
                  borderRadius: 99,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </View>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      {/* DoctorList */}
      <View style={{ marginTop: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontSize: 20, fontFamily: "appFont-semibold" }}>
            Doctors Rating
          </Text>
          <Text style={{ fontFamily: "appFont", color: Colors.primary }}>
            See All
          </Text>
        </View>
        <GenralDoctorList scrollType="vertical" doctorData={genralDoctorData} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
