import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';

// Sample notification data
const notifications = [
  { id: '1', message: 'You have a new follower!' },
  { id: '2', message: 'Your artwork has been liked by Jane.' },
  { id: '3', message: 'New comment on your post from Mike.' },
  { id: '4', message: 'Your artwork has been featured in the gallery.' },
  // Add more notifications as needed
];

const NotificationsScreen = () => {
  const renderNotificationItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationMessage}>{item.message}</Text>
    </View>
  );

  return (
    <ImageBackground 
    source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
    style={styles.background}
    imageStyle={styles.imageBackground} // To apply blur
  >
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotificationItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  background: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.5, // Adjust for the desired blur effect
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  notificationItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationMessage: {
    fontSize: 16,
  },
});

export default NotificationsScreen;
