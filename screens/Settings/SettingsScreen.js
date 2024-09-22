import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';

// Sample settings data categorized by sections
const settingsData = [
  {
    section: 'General',
    options: [
      { id: '1', label: 'Notifications', value: true },
      { id: '2', label: 'Dark Mode', value: false },
    ],
  },
  {
    section: 'Privacy Settings',
    options: [
      { id: '3', label: 'Location Access', value: true },
      { id: '4', label: 'Profile Visibility', value: false },
    ],
  },
  {
    section: 'Appearance & Layout',
    options: [
      { id: '5', label: 'Font Size', value: 'Medium' }, // Example non-toggle option
    ],
  },
  {
    section: 'Security',
    options: [
      { id: '6', label: 'Two-Factor Authentication (2FA)', value: false },
    ],
  },
];

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(false);

  const handleToggle = (id) => {
    switch (id) {
      case '1':
        setNotifications(!notifications);
        break;
      case '2':
        setDarkMode(!darkMode);
        break;
      case '3':
        setLocationAccess(!locationAccess);
        break;
      case '4':
        setProfileVisibility(!profileVisibility);
        break;
      case '6':
        setTwoFactorAuth(!twoFactorAuth);
        break;
      default:
        break;
    }
  };

  const renderSettingItem = ({ item }) => {
    if (typeof item.value === 'boolean') {
      return (
        <View style={styles.settingItem}>
          <Text style={darkMode ? styles.settingLabelDark : styles.settingLabel}>{item.label}</Text>
          <Switch
            value={
              item.id === '1' ? notifications :
              item.id === '2' ? darkMode :
              item.id === '3' ? locationAccess :
              item.id === '4' ? profileVisibility :
              item.id === '6' ? twoFactorAuth : false
            }
            onValueChange={() => handleToggle(item.id)}
          />
        </View>
      );
    } else {
      // For non-toggle options like font size
      return (
        <TouchableOpacity style={styles.settingItem}>
          <Text style={darkMode ? styles.settingLabelDark : styles.settingLabel}>{item.label}</Text>
          <Text style={darkMode ? styles.optionValueDark : styles.optionValue}>{item.value}</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderSection = ({ item }) => (
    <View style={styles.sectionContainer}>
      <Text style={darkMode ? styles.sectionTitleDark : styles.sectionTitle}>{item.section}</Text>
      <FlatList
        data={item.options}
        renderItem={renderSettingItem}
        keyExtractor={option => option.id}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Background image URL
      style={styles.background}
      imageStyle={styles.imageBackground}
    >
      <View style={[styles.container, darkMode && styles.containerDark]}>
        <FlatList
          data={settingsData}
          renderItem={renderSection}
          keyExtractor={item => item.section}
          showsVerticalScrollIndicator={false}
        />

        <Text style={styles.last}>
          Design By Nitish Mehta
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.4, // Adjust for blur effect
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent background for text visibility
  },

  last:{
    textAlign:'center',
  },
  containerDark: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  sectionTitleDark: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingLabel: {
    fontSize: 16,
    color: '#000',
  },
  settingLabelDark: {
    fontSize: 16,
    color: '#fff',
  },
  optionValue: {
    fontSize: 16,
    color: '#888',
  },
  optionValueDark: {
    fontSize: 16,
    color: '#ccc',
  },
});

export default SettingsScreen;
