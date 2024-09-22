import React from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    Image, 
    StyleSheet, 
    ImageBackground, 
    TouchableOpacity, 
    Linking, 
    ScrollView 
} from 'react-native';

// Sample artist data
const artist = {
  id: '1',
  name: 'Nitish Mehta',
  bio: 'A passionate digital artist who loves to explore abstract forms and colors. Nitish\'s work often delves into themes of human consciousness, technology, and futurism, blending vibrant colors with intricate designs to create captivating visual experiences.',
  imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnakOewYQZ2rbYecmOhYOZ0F2OP6lUIFQqOg&s',
  styles: ['Digital Art', 'Abstract', 'Surrealism'],
  themes: ['Human Consciousness', 'Technology', 'Futurism'],
  achievements: [
    'Featured in the 2023 Digital Art Summit',
    'Awarded "Best Visionary Artist" in 2022',
    'Exhibited at the Global Art Expo 2021',
  ],
  socialMediaLinks: {
    instagram: 'https://instagram.com/nitishart',
    twitter: 'https://twitter.com/nitishart',
    portfolio: 'https://nitishartportfolio.com',
  },
  artworks: [
    { id: '1', title: 'Future Vision', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnakOewYQZ2rbYecmOhYOZ0F2OP6lUIFQqOg&s' },
    { id: '2', title: 'Digital Dreams', uri: 'https://w0.peakpx.com/wallpaper/598/759/HD-wallpaper-fantasy-world-world-art-fantasy-water-flower-pink-ming-fan-blue-luminos.jpg' },
    { id: '3', title: 'Dreamland', uri: 'https://media.istockphoto.com/id/161843447/vector/dreamland.jpg?s=612x612&w=0&k=20&c=3j9EYWLikVqd1A67vf1PlrTSzm-zh7otBLxYjcqy5_c=' },
    { id: '4', title: 'Abstract Flow', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAMs5UakYteKyUWlFPLUO19sPYp2ef5tYx1qCLVYcaux5vd-B7KGV0JM7Tpr_OWyzOwA&usqp=CAU' },
    // Add more artwork objects as needed
  ],
};

const ArtistProfileScreen = ({ navigation }) => {
  
  // Function to handle opening URLs
  const openLink = (url) => {
      Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderArtworkItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.artworkItem} 
      onPress={() => openLink(item.uri)} // Opens the artwork image in the browser
    >
      <Image source={{ uri: item.uri }} style={styles.artworkImage} />
      <Text style={styles.artworkTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
      style={styles.background}
      imageStyle={styles.imageBackground} // To apply opacity
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Semi-transparent overlay for better readability */}
        <View style={styles.overlay}>
          
          {/* Artist Image */}
          <Image source={{ uri: artist.imageUrl }} style={styles.artistImage} />

          {/* Artist Name */}
          <Text style={styles.artistName}>{artist.name}</Text>

          {/* Artist Bio */}
          <Text style={styles.artistBio}>{artist.bio}</Text>

          {/* Artistic Styles */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Artistic Styles</Text>
            <View style={styles.listContainer}>
              {artist.styles.map((style, index) => (
                <Text key={index} style={styles.listItem}>• {style}</Text>
              ))}
            </View>
          </View>

          {/* Themes */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Themes</Text>
            <View style={styles.listContainer}>
              {artist.themes.map((theme, index) => (
                <Text key={index} style={styles.listItem}>• {theme}</Text>
              ))}
            </View>
          </View>

          {/* Achievements */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Achievements</Text>
            <View style={styles.listContainer}>
              {artist.achievements.map((achievement, index) => (
                <Text key={index} style={styles.listItem}>• {achievement}</Text>
              ))}
            </View>
          </View>

          {/* Social Media Links */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Connect with {artist.name}</Text>
            <View style={styles.socialMediaContainer}>
              {artist.socialMediaLinks.instagram && (
                <TouchableOpacity onPress={() => openLink(artist.socialMediaLinks.instagram)}>
                  <Text style={styles.socialMediaLink}>Instagram</Text>
                </TouchableOpacity>
              )}
              {artist.socialMediaLinks.twitter && (
                <TouchableOpacity onPress={() => openLink(artist.socialMediaLinks.twitter)}>
                  <Text style={styles.socialMediaLink}>Twitter</Text>
                </TouchableOpacity>
              )}
              {artist.socialMediaLinks.portfolio && (
                <TouchableOpacity onPress={() => openLink(artist.socialMediaLinks.portfolio)}>
                  <Text style={styles.socialMediaLink}>Portfolio</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>

          {/* Key Artworks */}
          <View style={styles.section}>
            <Text style={styles.artworksTitle}>Artworks</Text>
            <FlatList
              data={artist.artworks}
              renderItem={renderArtworkItem}
              keyExtractor={item => item.id}
              numColumns={2}
              columnWrapperStyle={styles.columnWrapper}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.artworksList}
            />
          </View>

          {/* Back Button */}
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  imageBackground: {
    opacity: 0.5, // Adjust for desired opacity
  },
  container: {
    flexGrow: 1,
    padding: 10,
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.85)', // Semi-transparent white overlay
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  artistImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Makes the image circular
    marginBottom: 20,
    alignSelf: 'center',
  },
  artistName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Darker text for better contrast
  },
  artistBio: {
    fontSize: 16,
    color: '#555',
    textAlign: 'justify',
    marginBottom: 20,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  artworksTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
    alignSelf: 'flex-start',
  },
  listContainer: {
    paddingLeft: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialMediaLink: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
    marginHorizontal: 10,
  },
  artworksList: {
    justifyContent: 'space-between',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  artworkItem: {
    width: '48%',
    marginBottom: 15,
    alignItems: 'center',
  },
  artworkImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 5,
  },
  artworkTitle: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: '#333',
  },
  backButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#1E90FF',
    borderRadius: 5,
    alignSelf: 'center',
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default ArtistProfileScreen;
