import React from 'react';
import { View, Text, Image } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { adjustColor } from '@/scripts/adjustColor';

const AppointementCard = ({ appointement }) => {

  const date = "11-07-2003"

  return (
    <View style={{ padding: 15, borderWidth: 1, borderColor: Colors.ligh_gray, borderRadius: 10, backgroundColor: Colors.white, marginTop: 10 }}>
      <Text style={{ fontSize: 16, fontFamily: 'appFont-semibold', marginBottom: 10 }}>
        {date} - {appointement.Time}
      </Text>

      <View style={{ display: 'flex', flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Image
          source={{ uri: 'https://img.freepik.com/premium-photo/portrait-confident-male-doctor-standing-with-arms-crossed-hospital-corridor-ai-generated_632984-111.jpg' }}
          style={{ width: 90, height: 100, borderRadius: 10 }}
        />

        <View >
          <Text style={{ fontSize: 16, fontFamily: 'appFont-semibold' }}>
            {appointement.fullName}
          </Text>

          {/* Address */}
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
            <Ionicons name="location-sharp" size={20} color={Colors.primary} />
            <Text style={{ fontFamily: 'appFont' }}>{appointement.userEmail}</Text>
          </View>

          {/* id */}
          <View style={{ display: 'flex', flexDirection: 'row', gap: 5, alignItems: 'center', marginTop: 5 }}>
            <Ionicons name="document-text" size={20} color={Colors.primary} />
            <Text style={{ fontFamily: 'appFont', color: adjustColor( Colors.gray, -90 )}}>Booking Id - #{appointement.id}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AppointementCard;
