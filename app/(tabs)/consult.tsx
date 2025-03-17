import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import AppointementCard from '@/components/AppointementCard';
import { Ionicons } from '@expo/vector-icons';

const doctor = {
  fullName: "Lara",
  userEmail: "example@gmail.com",
  id: 2020,
  Time: "12:30 - AM"
};

export default function consult() {
  // const [appointementList, setAppointementList] = useState([]);
  // setAppointementList(doctor);
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 5 }}>
        {/* <TouchableOpacity>
            <Ionicons name="arrow-back-circle-outline" size={37} color="black" />
        </TouchableOpacity> */}
        <Text style={{ fontSize: 25, fontFamily: 'appFont-semibold' }}>My Appointements</Text>
      </View>
      <FlatList
        data={[doctor]}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <AppointementCard appointement={item} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})