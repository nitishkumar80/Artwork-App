import React from 'react';
import { View, Text, Image, StyleSheet ,TouchableOpacity, ImageBackground } from 'react-native';

const ArtworkDetails = ({ route,navigation}) => {
    const { artwork ,artist} = route.params; // Get artwork data from route params

    return (



        <ImageBackground 
        source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
        style={styles.background}
        imageStyle={styles.imageBackground} // To apply blur
      >
        <View style={styles.container}>
            <Image source={{ uri: artwork.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{artwork.title}</Text>
            <Text style={styles.artist}>{artwork.artist}</Text>
            <Text style={styles.artist}>{artwork.description}</Text>

           
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity   >

        </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    artist: {
        fontSize: 18,
        color: '#555',
    },
    backButton: {
        position: 'absolute',
        top: 600, // Adjust as needed
        left: 280, // Adjust as needed
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
      background: {
        flex: 1,
      },
      imageBackground: {
        opacity: 0.5, // Adjust for the desired blur effect
      },

});

export default ArtworkDetails;
