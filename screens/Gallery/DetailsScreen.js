import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

const DetailsScreen = ({ route , navigation }) => {
  const { artwork } = route.params;

  // Sample additional images
  const additionalImages = [artwork.uri, /* Add more image URIs here */];

  return (

    <ImageBackground 
    source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
    style={styles.background}
    imageStyle={styles.imageBackground} // To apply blur
  >
    <View style={styles.container}>
   
      <FlatList
        data={additionalImages}
        renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
        keyExtractor={(item, index) => index.toString()}
        horizontal
      />
      <View style={styles.comp}>
      <Text style={styles.title}>{artwork.title}</Text>
      <Text style={styles.description}>{artwork.fullDescription}</Text>
      </View>
      
      
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },

  background: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.5, // Adjust for the desired blur effect
  },
  backButton: {
    position: 'absolute',
    top: 540, // Adjust as needed
    left: 160, // Adjust as needed
    backgroundColor: 'transparent',
    padding: 10,
    borderWidth: 2,         // Add outline thickness
    borderColor: 'red',     // Add outline color (change 'red' as needed)
    borderRadius: 5,        // Optional: to add rounded corners to the border
  },
  backButtonText: {
    fontSize: 18,
    color: 'red', // Change to desired color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  image: {
    width: 700,
    height: 200,
    marginRight: 10,
  },
  comp:{
position:'relative',
top:-200,
  },
});

export default DetailsScreen;
