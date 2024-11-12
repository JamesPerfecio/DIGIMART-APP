import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Profile = () => {
  const [fontsLoaded] = useFonts({
    "FiraSansCondensed-Bold": require("../../assets/fonts/FiraSansCondensed-Bold.ttf"),
    "FiraSansCondensed-Regular": require("../../assets/fonts/FiraSansCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <LinearGradient colors={['#a3c9f1', '#e5f3ff']} style={styles.container}>
      <ScrollView>
        {/* Profile Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Profile</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/image/pfp.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>James Perfecio</Text>
            <Text style={styles.profileBio}>
              Passionate digital artist and software developer with a keen interest in creating engaging digital products.
            </Text>
            <Text style={styles.totalSales}>Total Sales: 3,749</Text>
            <Text style={styles.profileStats}>Items Listed: 6,254</Text>
            <Text style={styles.profileStats}>Followers: 252,690</Text>
          </View>
        </View>

        {/* Follow & Message Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Follow</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Message</Text>
          </TouchableOpacity>
        </View>

        {/* Ratings */}
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>Rating:</Text>
          <View style={styles.stars}>
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <MaterialIcons key={i} name="star" size={24} color="#FFD700" />
              ))}
          </View>
        </View>

        {/* Stats Summary */}
        <View style={styles.statsSummary}>
          <View style={styles.statsItem}>
            <MaterialIcons name="trending-up" size={24} color="#003366" />
            <Text style={styles.statsText}>Growth: +12% this month</Text>
          </View>
          <View style={styles.statsItem}>
            <Entypo name="price-ribbon" size={24} color="#003366" />
            <Text style={styles.statsText}>Top Seller in Digital Art</Text>
          </View>
        </View>

        {/* Contact Section */}
        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Contact Information</Text>
          <Text style={styles.contactText}>Email: jamesperfecio@email.com</Text>
          <Text style={styles.contactText}>Phone: +123-456-7890</Text>
        </View>

        {/* Recent Activities */}
        <View style={styles.activitiesSection}>
          <Text style={styles.activitiesTitle}>Recent Activities</Text>
          {["Sold 'Digital Art Pack' - 2 days ago", "Listed new item 'Programming E-Book' - 2 days ago", "Received 'Best Seller' badge - 1 week ago"].map((activity, index) => (
            <View key={index} style={styles.activityItem}>
              <Text style={styles.activityText}>{activity}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Bold',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Bold',
  },
  profileBio: {
    fontSize: 14,
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Regular',
    marginVertical: 10,
  },
  totalSales: {
    fontSize: 16,
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Regular',
    marginTop: 5,
  },
  profileStats: {
    fontSize: 14,
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#003366',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'FiraSansCondensed-Bold',
  },
  ratingContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  ratingText: {
    fontSize: 18,
    color: '#003366',
    marginBottom: 5,
    fontFamily: 'FiraSansCondensed-Regular',
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  statsSummary: {
    marginVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statsText: {
    fontSize: 14,
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Regular',
    marginLeft: 10,
  },
  contactSection: {
    marginVertical: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Bold',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Regular',
  },
  activitiesSection: {
    marginVertical: 20,
  },
  activitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Bold',
    marginBottom: 10,
  },
  activityItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  activityText: {
    fontSize: 14,
    color: '#003366',
    fontFamily: 'FiraSansCondensed-Regular',
  },
});

export default Profile;
