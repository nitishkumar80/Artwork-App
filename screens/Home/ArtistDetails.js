import React from 'react';
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    TouchableOpacity, 
    ScrollView, 
    Linking, 
    ImageBackground
} from 'react-native';

const ArtistDetails = ({ route, navigation }) => {
    const { artist } = route.params; // Get artist data from route params

    // Function to handle opening URLs
    const openLink = (url) => {
        Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
    };

    return (

        <ImageBackground 
        source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
        style={styles.background}
        imageStyle={styles.imageBackground} // To apply blur
      >
        <ScrollView contentContainerStyle={styles.container}>
            {/* Artist Image */}
            <Image source={{ uri: artist.imageUrl }} style={styles.image} />

            {/* Artist Name */}
            <Text style={styles.title}>{artist.name}</Text>

            {/* Artist Bio */}
            <Text style={styles.bio}>{artist.bio}</Text>

            {/* Artistic Styles */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Artistic Styles</Text>
                {artist.styles.map((style, index) => (
                    <Text key={index} style={styles.listItem}>• {style}</Text>
                ))}
            </View>

            {/* Themes */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Themes</Text>
                {artist.themes.map((theme, index) => (
                    <Text key={index} style={styles.listItem}>• {theme}</Text>
                ))}
            </View>

            {/* Achievements */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Achievements</Text>
                {artist.achievements.map((achievement, index) => (
                    <Text key={index} style={styles.listItem}>• {achievement}</Text>
                ))}
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
                <Text style={styles.sectionTitle}>Key Artworks</Text>
                <View style={styles.artworksContainer}>
                    {artist.artworks.map((artwork, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={styles.artworkItem}
                            onPress={() => navigation.navigate('ArtworkDetails', { artwork })}
                        >
                            <Image source={{ uri: artwork.imageUrl }} style={styles.artworkImage} />
                            <Text style={styles.artworkTitle}>{artwork.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
      
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
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
        textAlign: 'center',
    },
    bio: {
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
    artworksContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
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
    },
    backButton: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 30,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
    },
    backButtonText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default ArtistDetails;
