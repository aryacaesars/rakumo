import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FILTERS = [
  { label: 'All', value: 'all' },
  { label: 'Food', value: 'food' },
  { label: 'Ojek', value: 'ojek' },
  { label: 'Laundry', value: 'laundry' },
  { label: 'Photocopy', value: 'photocopy' },
];

const PROMOTIONS = [
  {
    type: 'ojek',
    title: 'Free Ojek Ride to Campus',
    description: 'Enjoy a free campus ojek ride for the first user',
    validUntil: 'Valid until 12/15/2025',
    brand: 'RAKUJEK',
    image: require('@/assets/images/tes.jpg'),
    tag: 'Ojek'
  },
  {
    type: 'ojek',
    title: 'Free Ojek Ride to Campus',
    description: 'Enjoy a free campus ojek ride for the first user',
    validUntil: 'Valid until 12/15/2025',
    brand: 'RAKUJEK',
    image: require('@/assets/images/tes.jpg'),
    tag: 'Ojek'
  },
];

export default function PromoScreen() {
  const [selected, setSelected] = useState('all');
  const filtered = selected === 'all' ? PROMOTIONS : PROMOTIONS.filter(p => p.type === selected.toLowerCase());

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="#2563eb" />
        <Text style={styles.backText}>Back</Text>
        <Text style={styles.headerTitle}>Promotion</Text>
      </View>

      {/* Filter */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={{ alignItems: 'center', paddingVertical: 4 }}
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

      {/* Promotion List */}
      <ScrollView style={styles.promoList} showsVerticalScrollIndicator={false}>
        {filtered.map((promo, i) => (
          <PromoCard key={i} promo={promo} />
        ))}
      </ScrollView>
    </View>
  );
}

type PromoCardProps = {
  promo: {
    type: string;
    title: string;
    description: string;
    validUntil: string;
    brand: string;
    image: any;
    tag: string;
  };
};

function PromoCard({ promo }: PromoCardProps) {
  return (
    <View style={styles.promoCard}>
      <View style={styles.promoImageContainer}>
        <Image source={promo.image} style={styles.promoImage} />
        <View style={styles.promoOverlay}>
          <Text style={styles.promoMainText}>Free</Text>
          <Text style={styles.promoMainText}>Ojek</Text>
          <Text style={styles.promoMainText}>Ride</Text>
        </View>
        <View style={styles.promoTag}>
          <Text style={styles.promoTagText}>{promo.tag}</Text>
        </View>
      </View>
      <View style={styles.promoContent}>
        <Text style={styles.promoTitle}>{promo.title}</Text>
        <Text style={styles.promoDescription}>{promo.description}</Text>
        <View style={styles.promoFooter}>
          <Ionicons name="calendar-outline" size={14} color="#666" />
          <Text style={styles.promoValidUntil}>{promo.validUntil}</Text>
        </View>
        <Text style={styles.promoBrand}>{promo.brand}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    color: '#2563eb',
    fontSize: 16,
    marginLeft: 8,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  filterContainer: {
    marginBottom: 16,
    maxHeight: 50,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    marginRight: 12,
  },
  filterBtnActive: {
    backgroundColor: '#2563eb',
  },
  filterText: {
    color: '#374151',
    fontWeight: '500',
    fontSize: 14,
  },
  filterTextActive: {
    color: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 16,
  },
  promoList: {
    flex: 1,
  },
  promoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  promoImageContainer: {
    position: 'relative',
    height: 180,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  promoImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  promoOverlay: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: 'rgba(37, 99, 235, 0.9)',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  promoMainText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 28,
  },
  promoTag: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#2563eb',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  promoTagText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  promoContent: {
    padding: 16,
  },
  promoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  promoDescription: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
    lineHeight: 20,
  },
  promoFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  promoValidUntil: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  promoBrand: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2563eb',
  },
});