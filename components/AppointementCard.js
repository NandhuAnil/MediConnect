import React from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { adjustColor } from '@/scripts/adjustColor';


const AppointementCard = ({ appointement }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'Invalid Date';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Extracts YYYY-MM-DD
  };

  return (
    <View style={{ padding: 15, borderWidth: 1, borderColor: Colors.gray, borderRadius: 10, backgroundColor: Colors.white, marginTop: 10 }}>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://img.freepik.com/premium-photo/portrait-confident-male-doctor-standing-with-arms-crossed-hospital-corridor-ai-generated_632984-111.jpg' }}
          style={{ width: 100, height: 100, borderRadius: 10 }}
        />

        <View >
          <Text style={{ fontSize: 16, fontFamily: 'appFont-semibold' }}>
            {appointement.doctor}
          </Text>
          <Text style={{ fontSize: 12, fontFamily: 'appFont-semibold', marginBottom: 15 }}>
            {formatDate(appointement.date)} - {appointement.time}
          </Text>
        </View>
      </View>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
        <Ionicons name="chatbubble-ellipses" size={20} color={Colors.primary} />
        <Text style={{ fontFamily: 'appFont' }}>{appointement.email}</Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
        <Ionicons name="document-text" size={20} color={Colors.primary} />
        <Text style={{ fontFamily: 'appFont', color: adjustColor( Colors.gray, -90 )}}>Booking Id - #{appointement._id}</Text>
      </View>
    </View>
  );
}

export default AppointementCard;
