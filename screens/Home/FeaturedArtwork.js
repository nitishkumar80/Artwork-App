import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Mock data for featured artwork
const featuredArtworkData = [
  { id: '1', title: 'Cosmic Dreams', imageUrl: 'https://c4.wallpaperflare.com/wallpaper/556/382/458/cosmic-dream-4k-wallpaper-preview.jpg' },
  { id: '2', title: 'Urban Escape', imageUrl: 'https://ih1.redbubble.net/image.5276259231.7168/raf,360x360,075,t,fafafa:ca443f4786.jpg' },
  { id: '3', title: 'Color Symphony', imageUrl: 'https://static1.squarespace.com/static/661ffe7a4e03b236e2d47872/661fff035660476758a1c785/662adda365c223704264a4a7/1722883947774/MIA_0108_Color+Symphony-min.jpg?format=1500w' },
];

export default function FeaturedArtwork() {
  const renderArtwork = ({ item }) => (
    <TouchableOpacity style={styles.artworkContainer} onPress={() => alert(`Selected: ${item.title}`)}>
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.artworkImage}
        resizeMode="cover"
        onError={() => alert('Error loading image')}
      />
      <Text style={styles.artworkTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Featured Artwork</Text>
      <FlatList
        data={featuredArtworkData}
        renderItem={renderArtwork}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  artworkContainer: {
    marginRight: 16,
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#ddd',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  artworkImage: {
    width: 150,  // Set a fixed width for better control
    height: 200,
  },
  artworkTitle: {
    padding: 8,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
