import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

const ParticipationPage = ({ route, navigation }) => {
    const { promotionalBanner } = route.params; // Get banner data from route params
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // Implement your submission logic here
        if (name && email) {
            Alert.alert('Submission Successful', `Thank you, ${name}, for participating!`);
            // Optionally reset the form or navigate away
            setName('');
            setEmail('');
        } else {
            Alert.alert('Error', 'Please fill in all fields');
        }
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Background image
            style={styles.background}
            imageStyle={styles.imageBackground} // To apply blur
        >
            <View style={styles.container}>
                <Image source={{ uri: promotionalBanner.imageUrl }} style={styles.image} />
                
                <Text style={styles.title}>Participate in the Challenge</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Your Name"
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Your Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />

                <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>

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
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
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
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
        width: '100%',
    },
    submitButton: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 5,
        marginBottom: 20,
    },
    submitButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    backButton: {
        backgroundColor: 'transparent',
        padding: 10,
        borderWidth: 2,
        borderColor: 'red',
        borderRadius: 5,
    },
    backButtonText: {
        fontSize: 18,
        color: 'red',
    },
    background: {
        flex: 1,
    },
    imageBackground: {
        opacity: 0.5, // Adjust for the desired blur effect
    },
});

export default ParticipationPage;
