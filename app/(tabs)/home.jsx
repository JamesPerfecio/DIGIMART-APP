import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';

const Home = () => {
  const [fontsLoaded] = useFonts({
    "FiraSansCondensed-Black": require("../../assets/fonts/FiraSansCondensed-Black.ttf"),
    "FiraSansCondensed-Bold": require("../../assets/fonts/FiraSansCondensed-Bold.ttf"),
    "FiraSansCondensed-ExtraBold": require("../../assets/fonts/FiraSansCondensed-ExtraBold.ttf"),
    "FiraSansCondensed-ExtraLight": require("../../assets/fonts/FiraSansCondensed-ExtraLight.ttf"),
    "FiraSansCondensed-Light": require("../../assets/fonts/FiraSansCondensed-Light.ttf"),
    "FiraSansCondensed-Medium": require("../../assets/fonts/FiraSansCondensed-Medium.ttf"),
    "FiraSansCondensed-Regular": require("../../assets/fonts/FiraSansCondensed-Regular.ttf"),
    "FiraSansCondensed-SemiBold": require("../../assets/fonts/FiraSansCondensed-SemiBold.ttf"),
    "FiraSansCondensed-Thin": require("../../assets/fonts/FiraSansCondensed-Thin.ttf"),
  });

  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

  // All categories and their respective images
  const categories = [
    { title: 'Ebooks', image: require('../../assets/image/reyna.png') },
    { title: 'Software', image: require('../../assets/image/cypher.png') },
    { title: 'Digital Design', image: require('../../assets/image/kj.jpg') },
    { title: 'Online Courses', image: require('../../assets/image/omen.jpg') },
    { title: 'Stock Photos', image: require('../../assets/image/neon.png') },
    { title: 'Music & Audio', image: require('../../assets/image/sky.jpg') },
    { title: 'Templates', image: require('../../assets/image/deadlock.jpg') },
    { title: 'Graphics', image: require('../../assets/image/fade.jpg') },
    { title: 'Web Development', image: require('../../assets/image/jett.jpg') },
  ];

  // Filter categories based on the search query
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome to DigiMart</Text>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for products..."
            placeholderTextColor="#aaa"
            value={searchQuery} // Bind search query value to input field
            onChangeText={(text) => setSearchQuery(text)} // Update search query when typing
          />
        </View>

        {/* Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionText}>
            DigiMart: Your secure and user-friendly marketplace for buying and selling digital products.
          </Text>
        </View>

        {/* Categories Section */}
        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            {filteredCategories.length > 0 ? (
              filteredCategories.map((category, index) => (
                <CategoryButton key={index} title={category.title} image={category.image} />
              ))
            ) : (
              <Text style={styles.noResultsText}>No categories found</Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const CategoryButton = ({ title, image }) => (
  <TouchableOpacity style={styles.category}>
    <Image source={image} style={styles.icon} />
    <Text style={styles.categoryText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#a3c9f1',
    padding: 20,
  },
  header: {
    backgroundColor: '#003366',
    padding: 25,
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  headerText: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'FiraSansCondensed-ExtraBold',
  },
  searchContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    height: 45,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  descriptionContainer: {
    marginBottom: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'FiraSansCondensed-Regular',
  },
  categoriesContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#333',
    fontFamily: 'FiraSansCondensed-Bold',
    marginBottom: 15,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap', // This allows wrapping of categories
    justifyContent: 'space-between',
  },
  category: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flexBasis: '30%', // Adjust category width
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    color: '#003366',
    fontFamily: 'FiraSansCondensed-SemiBold',
    fontSize: 16,
    marginTop: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  noResultsText: {
    fontSize: 18,
    fontFamily: 'FiraSansCondensed-Regular',
    color: '#333',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Home;


