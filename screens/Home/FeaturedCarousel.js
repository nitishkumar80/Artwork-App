import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const FeaturedCarousel = ({ navigation }) => {
    const artworks = [
        {
            id: 1, 
            title: 'Artwork 1', 
            artist: 'Nitish', 
            imageUrl: 'https://img.freepik.com/free-photo/abstract-backdrop-with-multi-colored-decoration-generative-ai_188544-12870.jpg', 
            link: 'ArtworkDetails', 
            description: 'This artwork is a vivid exploration of abstract forms, blending vibrant colors and dynamic shapes. It represents the artist\'s interpretation of human emotions and the chaotic beauty found in everyday life. Through the use of generative AI, the piece reflects both technological precision and creative spontaneity.'
        },
        {
            id: 2, 
            title: 'Artwork 2', 
            artist: 'Roushan', 
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQHYC_ZczxV2zw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695524296879?e=2147483647&v=beta&t=rLMZ59ByIABpdPtfPZPZC65iXWG4zbht2eqKfWOdxRs', 
            link: 'ArtworkDetails', 
            description: 'This piece explores the relationship between modernity and nature. It blends traditional painting techniques with digital enhancement, portraying a juxtaposition of natural landscapes and futuristic elements. The artist aims to highlight the delicate balance between technological advancement and the preservation of natural beauty.'
        },
        {
            id: 3, 
            title: 'Artwork 3', 
            artist: 'Pratik', 
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZvugEwdShQjd-KJyu-EgsKO0hrt3zDi38kA&s', 
            link: 'ArtworkDetails', 
            description: 'This piece explores the relationship between modernity and nature. It blends traditional painting techniques with digital enhancement, portraying a juxtaposition of natural landscapes and futuristic elements. The artist aims to highlight the delicate balance between technological advancement and the preservation of natural beauty.'
        },
        // Add more artworks as needed
    ];
    

    // const artists = [
    //     {
    //         id: 1, 
    //         name: 'Nitish', 
    //         bio: 'Nitish is a visionary digital artist.', 
    //         imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw0y7KyGqf1J7KL5iLeufL58_cgpiv12SvGtxDooTX0d3hQ2F8E8znp6fywkRrueNPwIQ&usqp=CAU', 
    //         link: 'ArtistDetails'
    //     },

    //     {
    //         id: 2, 
    //         name: 'Roushan', 
    //         bio: 'Roushan is a contemporary artist .', 
    //         imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQHYC_ZczxV2zw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695524296879?e=2147483647&v=beta&t=rLMZ59ByIABpdPtfPZPZC65iXWG4zbht2eqKfWOdxRs', 
    //         link: 'ArtistDetails'
    //     },
    //     {
    //         id: 3, 
    //         name: 'Pratik', 
    //         bio: 'Pratik is a contemporary artist .', 
    //         imageUrl: 'https://media.takealot.com/covers_images/0a0173183a9644e7966ebb232fa8951b/s-pdpxl.file', 
    //         link: 'ArtistDetails'
    //     },
    //     // Add more artists as needed
    // ];


    const artists = [
        {
            id: 1, 
            name: 'Nitish', 
            bio: 'Nitish is a visionary digital artist known for his abstract, surreal creations that push the boundaries of traditional art. His work is often inspired by technology, human consciousness, and futuristic themes. Nitish\'s use of vibrant colors and intricate details creates a captivating visual experience.', 
            imageUrl: 'https://emeritus.org/wp-content/uploads/2023/06/f12.png', 
            link: '/artist-details/nitish',
            styles: ['Digital Art', 'Abstract', 'Surrealism'],
            themes: ['Technology', 'Human Consciousness', 'Futurism'],
            achievements: [
                'Featured in the 2023 Digital Art Summit',
                'Awarded "Best Visionary Artist" in 2022',
                'Exhibited at the Global Art Expo 2021'
            ],
            socialMediaLinks: {
                instagram: 'https://instagram.com/nitishart',
                twitter: 'https://twitter.com/nitishart',
                portfolio: 'https://nitishartportfolio.com'
            },
            artworks: [
                {
                    title: 'Future Vision',
                    imageUrl: 'https://img.artpal.com/68927/36-23-8-27-18-25-41m.jpg',
                    link: '/artworks/future-vision'
                },
                {
                    title: 'Digital Dreams',
                    imageUrl: 'https://images.nightcafe.studio/jobs/bahGQ9IUwWyuROFQpXbu/bahGQ9IUwWyuROFQpXbu--2--riknl_15.625x.jpg?tr=w-1600,c-at_max',
                    link: '/artworks/digital-dreams'
                }
            ]
        },
    
        {
            id: 2, 
            name: 'Roushan', 
            bio: 'Roushan is a contemporary artist with a deep connection to minimalism and modern expression. His work focuses on the interplay between space, light, and form, often using muted tones and geometric patterns. Roushan’s art is celebrated for its ability to evoke emotions through simplicity and balance.', 
            imageUrl: 'https://images4.alphacoders.com/135/1350703.jpeg', 
            link: '/artist-details/roushan',
            styles: ['Minimalism', 'Modern Expressionism'],
            themes: ['Space', 'Light', 'Geometric Patterns'],
            achievements: [
                'Recipient of the 2022 Minimalist Art Award',
                'Featured in Modern Expressions Magazine',
                'Solo exhibition at the Contemporary Art Gallery 2023'
            ],
            socialMediaLinks: {
                instagram: 'https://instagram.com/roushanart',
                twitter: 'https://twitter.com/roushanart',
                portfolio: 'https://roushanportfolio.com'
            },
            artworks: [
                {
                    title: 'Geometric Harmony',
                    imageUrl: 'https://img.freepik.com/premium-vector/geometric-harmony-craft-tshirt-sticker-design-using-geometric-shapes-patterns_646696-922.jpg',
                    link: '/artworks/geometric-harmony'
                },
                {
                    title: 'Silent Spaces',
                    imageUrl: 'https://f4.bcbits.com/img/a0993608589_65',
                    link: '/artworks/silent-spaces'
                }
            ]
        },
        
        {
            id: 3, 
            name: 'Pratik', 
            bio: 'Pratik is a contemporary artist known for blending traditional painting techniques with digital mediums. His work often explores themes of identity, nature, and the human experience. Pratik’s unique approach to mixing textures and mediums has earned him recognition in both digital and fine art communities.', 
            imageUrl: 'https://media.takealot.com/covers_images/0a0173183a9644e7966ebb232fa8951b/s-pdpxl.file', 
            link: '/artist-details/pratik',
            styles: ['Mixed Media', 'Contemporary Painting', 'Digital Art'],
            themes: ['Identity', 'Nature', 'Human Experience'],
            achievements: [
                'Winner of the 2023 Mixed Media Excellence Award',
                'Featured in Digital & Fine Arts Journal',
                'Participated in the International Art Fair 2022'
            ],
            socialMediaLinks: {
                instagram: 'https://instagram.com/pratikart',
                twitter: 'https://twitter.com/pratikart',
                portfolio: 'https://pratikportfolio.com'
            },
            artworks: [
                {
                    title: 'Identity Blend',
                    imageUrl: 'https://www.npg.org.uk/assets/image-cache/long/mw304573/Everlyn-Nicodemus-Sjlvportrtt-kersberga-Self-portrait-Akersberga.36ad223f.jpg',
                    link: '/artworks/identity-blend'
                },
                {
                    title: 'Nature\'s Whisper',
                    imageUrl: 'https://thumbs.dreamstime.com/b/whispering-winds-nature-s-melodious-embrace-impressionistic-style-indulge-tranquility-harmony-serene-292701049.jpg',
                    link: '/artworks/natures-whisper'
                }
            ]
        },
        // Add more artists as needed with similar structure
    ];
    
    

    const promotionalBanners = [
        // Sample promotional banners
        { id: 1, text: 'Join our Art Challenge!', imageUrl: 'https://static.vecteezy.com/system/resources/previews/026/767/457/non_2x/banner-design-template-for-art-school-studio-course-class-education-back-to-school-sale-background-with-art-paints-brushes-and-palette-creativity-hobby-vector.jpg', link: 'Challenge' },
        { id: 2, text: 'Exclusive Webinar: Art Techniques',imageUrl: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/new-art-studio-banner-design-template-cf89dd98f4f9bfd01b195036331daca5_screen.jpg?ts=1657010188', link: 'Webinar' },
        // Add more banners as needed
    ];

    return (
        <View style={styles.container}>

                        {/* Promotional Banners Section */}
         {/* Promotional Banners Section */}
<View style={styles.section}>
    <Text style={styles.sectionTitle}>Promotional Banners</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {promotionalBanners.map(banner => (
            <TouchableOpacity key={banner.id} style={styles.banner}
            onPress={() => navigation.navigate('Challenge', { promotionalBanners:[banner]})} // Pass specific artist
            
            >
                <Image source={{ uri: banner.imageUrl }} style={styles.bannerImage} />
                <Text style={styles.bannerText}>{banner.text}</Text>
            </TouchableOpacity>
        ))}
    </ScrollView>

            {/* Top Artworks Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Top Artworks</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {artworks.map(artwork => (
                        <TouchableOpacity 
                            key={artwork.id} 
                            style={styles.card} 
                            onPress={() => navigation.navigate('ArtworkDetail', { artwork })}
                        >
                            <Image source={{ uri: artwork.imageUrl }} style={styles.image} />
                            <View style={styles.overlay}>
                                <Text style={styles.cardTitle}>{artwork.title}</Text>
                                <Text style={styles.cardArtist}>{artwork.artist}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
           
        {/* Artist Spotlights Section */}
<View style={styles.section}>
    <Text style={styles.sectionTitle}>Artist Spotlights</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {artists.map(artist => (
            <TouchableOpacity 
                key={artist.id} 
                style={styles.card} 
                onPress={() => navigation.navigate('ArtistDetail', { artist })} // Pass specific artist
            >
                <Image source={{ uri: artist.imageUrl }} style={styles.image} />
                <View style={styles.overlay}>
                    <Text style={styles.cardTitle}>{artist.name}</Text>
                    {/* <Text style={styles.cardArtist}>{artist.bio}</Text> */}
                </View>
            </TouchableOpacity>
        ))}
    </ScrollView>
</View>


</View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       padding:2,
    },
    section: {
        marginBottom: 40,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        width: 200,
        marginRight: 15,
        position: 'relative',
    },
    bannerImage: {
        width: 252,
        height: 130, // Adjust as needed
        borderRadius: 10,
        marginBottom: 5,
    },
    
    image: {
        width: 200,
        height: 150,
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 10,
       
    },
    cardTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
    cardArtist: {
        color: 'white',
    },
    banner: {
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    bannerText: {
        fontWeight: 'bold',
    },
});

export default FeaturedCarousel;
