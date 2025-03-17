import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import GenralDoctorList from '@/components/GenralDoctorListList';

export default function index() {
  return (
    <ScrollView style={{ padding: 10}} showsVerticalScrollIndicator={false}>
      <GenralDoctorList scrollType="vertical"/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})