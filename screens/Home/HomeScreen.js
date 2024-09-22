// import React from 'react';
// import { ScrollView, View, Text, StyleSheet, ImageBackground } from 'react-native';
// import FeaturedArtwork from './FeaturedArtwork';
// import LatestArtworks from './LatestArtworks';  // Import LatestArtworks component
// import FeaturedCarousel from './FeaturedCarousel';

// export default function HomeScreen() {
//   return (
//     <ImageBackground 
//     source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
//     style={styles.background}
//     imageStyle={styles.imageBackground} // To apply blur
//   >
//     <ScrollView style={styles.container}>
//       <View style={styles.headerContainer}>
     
//       </View>

//       {/* Featured Artwork Section */}
//       {/* <FeaturedArtwork /> */}
//       <FeaturedCarousel  />


//       {/* Other content can go here */}
//     </ScrollView>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   background: {
//     flex: 1,
//     resizeMode: 'cover', // Ensure the background image covers the entire screen
//   },
//   imageBackground: {
//     blurRadius: 10, // Apply blur effect
//     opacity: 0.6, // Adjust opacity for better contrast
//   },
//   headerContainer: {
//     marginBottom: 16,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   latestArtworksContainer: {
//     marginTop: 16,
//   },
// });

import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ImageBackground, Modal, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FeaturedArtwork from './FeaturedArtwork';
import FeaturedCarousel from './FeaturedCarousel';
import LoginScreen from './LoginScreen'; // Import LoginScreen

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  useEffect(() => {
    const checkLoginStatus = async () => {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (!isLoggedIn) {
        setModalVisible(true); // Show modal if not logged in
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true'); // Set login status
    setModalVisible(false); // Close modal after login
  };

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Background image
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Welcome to Art Showcase</Text>
        </View>

        {/* Featured Artwork Section */}
        <FeaturedCarousel />

        {/* Other content can go here */}
      </ScrollView>

      {/* Modal for Login Screen */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <LoginScreen closeModal={() => setModalVisible(false)} handleLogin={handleLogin} />
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  headerContainer: {
    marginBottom: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for modal
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 30,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
