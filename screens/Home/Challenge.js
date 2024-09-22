import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';

const Challenge = ({ route, navigation }) => {
    const { promotionalBanners } = route.params;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false); // Loading state

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = () => {
        if (name && validateEmail(email)) {
            setLoading(true);
            // Simulate API call
            setTimeout(() => {
                Alert.alert('Submission Successful', `Thank you, ${name}, for participating!`);
                setName('');
                setEmail('');
                setLoading(false);
            }, 2000);
        } else {
            Alert.alert('Error', 'Please fill in all fields with a valid email.');
        }
    };

    return (
        <ImageBackground 
            source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }}
            style={styles.background}
            imageStyle={styles.imageBackground}
        >
            <View style={styles.container}>
            <Image source={{ uri: promotionalBanners[0].imageUrl }} style={styles.bannerImage} />
            <Text style={styles.title}>{promotionalBanners[0].text}</Text>
                

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

                <TouchableOpacity 
                    style={styles.submitButton} 
                    onPress={handleSubmit} 
                    disabled={loading} // Disable button while loading
                >
                    <Text style={styles.submitButtonText}>{loading ? 'Submitting...' : 'Submit'}</Text>
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
    bannerImage: {
        width: '100%',
        height: 200,
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
        opacity: 0.5,
    },
});

export default Challenge;
