import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';


const ActionButton = () => {

    const actionButtonList = [
        {
            id: 0,
            name: 'Website',
            icon: 'earth'
        },
        {
            id: 1,
            name: 'Email',
            icon: 'chatbubble-ellipses'
        },
        {
            id: 2,
            name: 'Phone',
            icon: 'call'
        },
        {
            id: 3,
            name: 'Location',
            icon: 'location'
        },
        {
            id: 4,
            name: 'Share',
            icon: 'share-social-sharp'
        }
    ];

    return (
        <View style={{ marginTop: 20 }}>
            <FlatList
                data={actionButtonList}
                numColumns={5}
                columnWrapperStyle={{
                    flex: 1,
                    justifyContent: 'space-between'
                }}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{ alignItems: 'center' }}>
                        <View style={{
                            backgroundColor: Colors.iconBg, padding: 13, borderRadius
                                : 99, alignItems: 'center', width: 55,
                        }}>
                            <Ionicons name={item.icon} size={26} color={Colors.primary} />
                        </View>
                        <Text style={{ fontFamily: 'appFont-semibold', marginTop: 5 }}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
                scrollEnabled={false}
            />
        </View>
    );
}

export default ActionButton;
