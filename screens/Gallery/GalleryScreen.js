import React, { useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, Button, TouchableOpacity, ImageBackground } from 'react-native';

const artworks = [
  {
    id: '1',
    uri: 'https://www.tallengestore.com/cdn/shop/products/Fantasy_20World_20of_20a_20Kid_e4ee1775-2167-4d14-994d-245d643eb97d_large.jpg?v=1568961397',
    title: 'Fantasy World',
    shortDescription: 'A beautiful depiction of a fantasy realm.',
    fullDescription: 'A beautiful depiction of a fantasy realm where imagination knows no bounds. The vibrant colors and intricate details bring this world to life, inviting viewers to explore its enchanting landscapes and whimsical creatures.'
  },
  {
    id: '2',
    uri: 'https://img.freepik.com/premium-vector/amazing-fantasy-world-fantasy-another-planet-galaxy-abstraction-bright-colors-unusual-living-organisms-sky-new-world-aliens-concept-art-fantasy-concept-vector-illustration_399089-6956.jpg',
    title: 'Galactic Abstraction',
    shortDescription: 'An abstract representation of galaxies.',
    fullDescription: 'An abstract representation of galaxies, showcasing the beauty of the universe in a kaleidoscope of colors. This artwork captures the essence of otherworldly phenomena and the mysteries of space, blending imaginative concepts with artistic expression.'
  },
  {
    id: '3',
    uri: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/enchanted-forest-philip-straub.jpg',
    title: 'Mystical Forest',
    shortDescription: 'A serene and mystical depiction of a lush forest.',
    fullDescription: 'A serene and mystical depiction of a lush forest filled with vibrant flora and ethereal creatures. The interplay of light and shadow creates an enchanting atmosphere, inviting viewers to wander through its magical paths and discover hidden wonders.'
  },

  
  // Add more artworks as needed...
];

const featuredArtworks = [
  { id: '1', uri: 'https://images.photowall.com/products/84847/incredible-fantasy-world.jpg?h=699&q=85' },
  { id: '2', uri: 'https://i.etsystatic.com/38640606/r/il/8090bd/4685137770/il_570xN.4685137770_b8kh.jpg' },
  { id: '3', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq18hje4dnF3xiYFYGchkXFkxowmMSLRIZKw&s' },

];

const GalleryScreen = ({ navigation }) => {
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      flatListRef.current.scrollToIndex({ animated: true, index: (Math.floor(Math.random() * featuredArtworks.length)) % featuredArtworks.length });
    }, 3000); // Change the index every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  const renderArtworkItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', { artwork: item })}
      style={styles.artworkContainer}
    >
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.artworkDescription}>{item.shortDescription}</Text>
    </TouchableOpacity>
  );

  const renderFeaturedItem = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.featuredImage} />
  );

  return (
    <ImageBackground 
    source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
    style={styles.background}
    imageStyle={styles.imageBackground} // To apply blur
  >
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      {/* Featured Artworks Section */}
      <Text style={styles.sectionTitle}>Featured Artworks</Text>
      <FlatList
        ref={flatListRef}
        data={featuredArtworks}
        renderItem={renderFeaturedItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.featuredList}
        snapToInterval={310} // Adjust for image width + margin
        snapToAlignment="center"
      />

      {/* All Artworks Section */}
      <Text style={styles.sectionTitle}>All Artworks</Text>
      <FlatList
        data={artworks}
        renderItem={renderArtworkItem}
        keyExtractor={item => item.id}
        numColumns={3}
        showsVerticalScrollIndicator={false}
      />

      {/* Upload Button */}
      <Button title="Upload Your Artwork" onPress={() => alert('Upload Artwork')} />
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },


  background: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.5, // Adjust for the desired blur effect
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  featuredList: {
    marginBottom: 20,
  },
  image: {
    width: '95%',
    height: 200,
    margin: 5,
    borderRadius: 8,
  },
  featuredImage: {
    width: 310,
    height: 200,
    marginRight: 15,
    borderRadius: 10,
  },
  artworkContainer: {
    margin: 5,
    alignItems: 'center',
  },
  artworkTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  artworkDescription: {
    fontSize: 12,
    color: '#666',
  },
});

export default GalleryScreen;
