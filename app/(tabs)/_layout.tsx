import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#2563eb',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: '#f8f9fa', // Light color for the bottom navbar
          },
          default: {
            backgroundColor: '#f8f9fa', // Light color for the bottom navbar
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home-outline" size={28} color={focused ? '#2563eb' : color} />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tabs.Screen
        name="promo"
        options={{
          title: 'Promo',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="compass-outline" size={28} color={focused ? '#2563eb' : color} />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="time-outline" size={28} color={focused ? '#2563eb' : color} />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="person-outline" size={28} color={focused ? '#2563eb' : color} />
          ),
          tabBarLabelStyle: { fontSize: 14 },
        }}
      />
    </Tabs>
  );
}
