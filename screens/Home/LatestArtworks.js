import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

// Mock Data (replace this with actual data or an API call)
const latestArtworks = [
  {
    id: '1',
    title: 'Sunset Bliss',
    artist: 'Jane Doe',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhnZiUvyfnJ_hcFpMRQmji9BHrQnVR0Lt9Rw&s',
  },
  {
    id: '2',
    title: 'Ocean Waves',
    artist: 'John Smith',
    imageUrl: 'https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/81221/255002/1643990962826_PSX_20210928_165005__21711.1687161388.jpg?c=2&imbypass=on',
  },
  {
    id: '3',
    title: 'Forest Path',
    artist: 'Emily Johnson',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQU7Exb6e5uLaDRr_413JNRV7silDZUVknJA&s',
  },
];

export default function LatestArtworks() {
  const renderItem = ({ item }) => (
    <View style={styles.artworkItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.artworkImage} />
      <Text style={styles.artworkTitle}>{item.title}</Text>
      <Text style={styles.artworkArtist}>by {item.artist}</Text>
    </View>
  );

  return (
    <View>
      <Text style={styles.headerText}>Latest Artworks</Text>
      <FlatList
        data={latestArtworks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal={true}  // You can make it vertical if you prefer
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artworkItem: {
    marginRight: 15,
  },
  artworkImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  artworkTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  artworkArtist: {
    fontSize: 14,
    color: 'gray',
  },
});
