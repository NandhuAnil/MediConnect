import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ActionButton from '@/components/ActionButton';
import BookingSection from '@/components/BookingSection';
import { Colors } from '@/constants/Colors';
import { useLocalSearchParams } from "expo-router";

interface DoctorData {
  doctorName: string;
  amountPerHour: number;
  Specialist: string;
  availableSlots: number;
  rating: number;
  image: string;
}

export default function bookAppointement() {
  const { doctorData } = useLocalSearchParams<{ doctorData: string }>();
  const parsedData: DoctorData = doctorData ? JSON.parse(doctorData) : null;

  return (
    <ScrollView style={{ padding: 20 }}>
      {parsedData ? (
        <>
          <View style={styles.header}>
            <Image source={{ uri: 'https://img.freepik.com/premium-photo/portrait-confident-male-doctor-standing-with-arms-crossed-hospital-corridor-ai-generated_632984-111.jpg' }} style={styles.image}/>
            <View>
              <Text style={styles.title}>{parsedData.doctorName}</Text>
              <Text>{parsedData.Specialist}</Text>
            </View>
          </View>
        </>
      ) : (
        <Text>No data available</Text>
      )}
      <ActionButton />
      <View style={{ borderWidth: 1, borderColor: Colors.gray, margin: 5, marginBottom: 15, marginTop: 15 }}></View>
      <BookingSection doctorData={parsedData} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
})