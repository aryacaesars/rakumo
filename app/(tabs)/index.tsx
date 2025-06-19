import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hi, John!</Text>
          <Text style={styles.subtitle}>What do you need today?</Text>
        </View>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }} style={styles.avatar} />
      </View>

      {/* Rakumo Logo */}
      <View style={[styles.logoContainer, { alignItems: 'flex-start', marginBottom: 0 }]}>
        <Image source={require('@/assets/images/rakumo-logo.png')} style={[styles.logo, { width: 100, height: 15 }]} />
      </View>

      {/* Banner/Carousel */}
      <View style={styles.banner}>
        <Image source={require('@/assets/images/header.png')} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
        </View>
      </View>

      {/* Our Services */}
      <Text style={styles.sectionTitle}>Our Services</Text>
      <View style={styles.servicesGrid}>
        <ServiceIcon title="Makanan" icon={<MaterialIcons name="fastfood" size={28} color="#FFB300" />} desc="Makan atau jajan di dekat kampus" color="#FFF3E0" />
        <ServiceIcon title="Ojek Kampus" icon={<FontAwesome5 name="motorcycle" size={28} color="#29B6F6" />} desc="Antar jemput ke kosan kamu" color="#E3F2FD" />
        <ServiceIcon title="Laundry" icon={<MaterialIcons name="local-laundry-service" size={28} color="#66BB6A" />} desc="Nyuci tinggal duduk manis di kos aja" color="#E8F5E9" />
        <ServiceIcon title="Fotokopi" icon={<MaterialIcons name="print" size={28} color="#EC407A" />} desc="Dikejar deadline? aman! Upload file nya aja!" color="#FCE4EC" />
        <ServiceIcon title="Cari Kosan" icon={<MaterialIcons name="home" size={28} color="#8E24AA" />} desc="Cari kosan yang sesuai sama kamu!" color="#F3E5F5" />
        <ServiceIcon title="Lainnya" icon={<Ionicons name="ellipsis-horizontal" size={28} color="#FF7043" />} desc="Pake layanan lainnya yu" color="#FBE9E7" />
      </View>

      {/* Recent Activity */}
      <Text style={styles.sectionTitle}>Recent Activity</Text>
      <View style={styles.activityCard}>
        <View style={styles.activityIcon}><FontAwesome5 name="motorcycle" size={20} color="#29B6F6" /></View>
        <View style={{flex:1}}>
          <Text style={styles.activityTitle}>Ojek ride to Library</Text>
          <Text style={styles.activityTime}>2 hours ago</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} color="#B0B0B0" />
      </View>
      <View style={styles.activityCard}>
        <View style={styles.activityIcon}><MaterialIcons name="local-laundry-service" size={20} color="#66BB6A" /></View>
        <View style={{flex:1}}>
          <Text style={styles.activityTitle}>Laundry order pickup</Text>
          <Text style={styles.activityTime}>Yesterday</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} color="#B0B0B0" />
      </View>

      {/* Nearby Services */}
      <Text style={styles.sectionTitle}>Nearby Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginBottom:24}}>
        <NearbyCard
          image={require('@/assets/images/tes.jpg')}
          title="Campus Riders"
          rating={4.8}
          distance="0.3 km"
        />
        <NearbyCard
          image={require('@/assets/images/splash-icon.png')}
          title="Clean Express"
          rating={4.7}
          distance="0.5 km"
        />
      </ScrollView>
    </ScrollView>
  );
}

type ServiceIconProps = {
  title: string;
  icon: React.ReactNode;
  desc: string;
  color: string;
};

function ServiceIcon({ title, icon, desc, color }: ServiceIconProps) {
  return (
    <View style={[styles.serviceIcon, { backgroundColor: color }]}> 
      <View style={styles.iconCircle}>{icon}</View>
      <Text style={styles.serviceTitle}>{title}</Text>
      <Text style={styles.serviceDesc}>{desc}</Text>
    </View>
  );
}

type NearbyCardProps = {
  image: any;
  title: string;
  rating: number;
  distance: string;
};

function NearbyCard({ image, title, rating, distance }: NearbyCardProps) {
  return (
    <View style={styles.nearbyCard}>
      <Image source={image} style={styles.nearbyImage} />
      <Text style={styles.nearbyTitle}>{title}</Text>
      <View style={styles.nearbyInfo}>
        <Ionicons name="star" size={14} color="#FFD600" />
        <Text style={styles.nearbyRating}>{rating}</Text>
        <Text style={styles.nearbyDistance}>{distance}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16},
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 50, marginBottom: 12 },
  greeting: { fontSize: 26, fontWeight: 'bold', color: '#222' },
  subtitle: { color: '#7B7B7B', fontSize: 15 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginLeft: 8 },
  logo: { width: 100, height: 15, marginBottom: 16 },
  banner: { borderRadius: 16, overflow: 'hidden', marginBottom: 20, position: 'relative', height: 140 },
  bannerImage: { width: '100%', height: '100%', position: 'absolute' },
  bannerTextContainer: { position: 'absolute', left: 16, top: 20, right: 16 },
  bannerTitle: { color: '#fff', fontWeight: 'bold', fontSize: 22, marginBottom: 4 },
  bannerSubtitle: { color: '#fff', fontSize: 15 },
  sectionTitle: { fontWeight: 'bold', fontSize: 18, marginVertical: 12 },
  servicesGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  serviceIcon: { width: '30%', minWidth: 100, borderRadius: 12, padding: 10, marginBottom: 12, alignItems: 'center' },
  iconCircle: { backgroundColor: '#fff', borderRadius: 20, padding: 8, marginBottom: 6 },
  serviceTitle: { fontWeight: 'bold', fontSize: 14, marginBottom: 2 },
  serviceDesc: { fontSize: 11, color: '#7B7B7B', textAlign: 'center' },
  activityCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7F7F7', borderRadius: 12, padding: 12, marginBottom: 10 },
  activityIcon: { backgroundColor: '#fff', borderRadius: 16, padding: 8, marginRight: 12 },
  activityTitle: { fontWeight: 'bold', fontSize: 15 },
  activityTime: { color: '#7B7B7B', fontSize: 12 },
  nearbyCard: { width: 170, backgroundColor: '#F7F7F7', borderRadius: 16, marginRight: 14, padding: 10 },
  nearbyImage: { width: '100%', height: 80, borderRadius: 12, marginBottom: 8 },
  nearbyTitle: { fontWeight: 'bold', fontSize: 15, marginBottom: 4 },
  nearbyInfo: { flexDirection: 'row', alignItems: 'center' },
  nearbyRating: { fontSize: 13, marginLeft: 4, marginRight: 8 },
  nearbyDistance: { fontSize: 13, color: '#7B7B7B' },
  logoContainer: { alignItems: 'center', marginBottom: 16 },
});
