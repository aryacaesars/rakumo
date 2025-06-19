import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Food', value: 'food' },
  { label: 'Ojek', value: 'ojek' },
  { label: 'Laundry', value: 'laundry' },
  { label: 'Photocopy', value: 'photocopy' },
];

const ACTIVITIES = [
  { type: 'ojek', icon: <FontAwesome5 name="motorcycle" size={28} color="#2563eb" />, title: 'Ojek ride to Library', time: '2 hours ago' },
  { type: 'laundry', icon: <MaterialIcons name="local-laundry-service" size={28} color="#2563eb" />, title: 'Laundry order pickup', time: 'Yesterday' },
  { type: 'ojek', icon: <FontAwesome5 name="motorcycle" size={28} color="#2563eb" />, title: 'Ojek ride to Library', time: '2 hours ago' },
  { type: 'laundry', icon: <MaterialIcons name="local-laundry-service" size={28} color="#2563eb" />, title: 'Laundry order pickup', time: 'Yesterday' },
  { type: 'ojek', icon: <FontAwesome5 name="motorcycle" size={28} color="#2563eb" />, title: 'Ojek ride to Library', time: '2 hours ago' },
  { type: 'laundry', icon: <MaterialIcons name="local-laundry-service" size={28} color="#2563eb" />, title: 'Laundry order pickup', time: 'Yesterday' },
];

export default function ActivityScreen() {
  const [selected, setSelected] = useState('all');
  const filtered = selected === 'all' ? ACTIVITIES : ACTIVITIES.filter(a => a.type === selected.toLowerCase());

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#222" style={{marginRight:8}} />
        <Text style={styles.headerTitle}>Activity History</Text>
      </View>
      {/* Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterScroll}
        contentContainerStyle={{ alignItems: 'center', paddingVertical: 2 }}
      >
        {FILTERS.map(f => (
          <TouchableOpacity
            key={f.value}
            style={[styles.filterBtn, selected === f.value && styles.filterBtnActive]}
            onPress={() => setSelected(f.value)}
          >
            <Text style={[styles.filterText, selected === f.value && styles.filterTextActive]}>{f.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {/* Section Title */}
      <Text style={styles.sectionTitle}>Available Promotion</Text>
      {/* Activity List */}
      <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
        {filtered.map((a, i) => (
          <View style={styles.activityCard} key={i}>
            <View style={styles.activityIcon}>{a.icon}</View>
            <View style={{flex:1}}>
              <Text style={styles.activityTitle}>{a.title}</Text>
              <Text style={styles.activityTime}>{a.time}</Text>
            </View>
            <Ionicons name="ellipsis-horizontal" size={22} color="#B0B0B0" />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16, paddingTop: 50 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  headerTitle: { fontWeight: 'bold', fontSize: 22, color: '#222' },
  filterScroll: { marginBottom: 12, maxHeight: 50 },
  filterBtn: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, backgroundColor: '#F3F4F6', marginRight: 8 },
  filterBtnActive: { backgroundColor: '#2563eb' },
  filterText: { color: '#222', fontWeight: '500' },
  filterTextActive: { color: '#fff' },
  sectionTitle: { fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  activityCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F7F7', borderRadius: 12, padding: 12, marginBottom: 12 },
  activityIcon: { backgroundColor: '#E8EDFB', borderRadius: 16, padding: 8, marginRight: 12 },
  activityTitle: { fontWeight: 'bold', fontSize: 15 },
  activityTime: { color: '#7B7B7B', fontSize: 12 },
});
