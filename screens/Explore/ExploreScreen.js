import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  FlatList, 
  Image, 
  ImageBackground, 
  TouchableOpacity 
} from 'react-native';

export default function ExploreScreen() {
  const [selectedCategory, setSelectedCategory] = useState('Digital Art');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Digital Art', 'Photography', '3D Art', 'Abstract', 'Surrealism'];

  const artworkData = {
    'Digital Art': [
      { id: '1', title: 'Surreal Dream', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7fG76UutZOSklx8jUtNqwPpwfF6XXQl5rQ&s' },
      { id: '2', title: 'Digital Wonder', image: 'https://m.media-amazon.com/images/I/A178UOi4p4L.jpg' },
      { id: '3', title: 'Cyber Dreams', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgghPJxRxH2Mf_ljOymCKRbYMN99tDsHBZSA&s' },
      { id: '4', title: 'Abstract Layers', image: 'https://images.squarespace-cdn.com/content/v1/5928d4dd15cf7dec0ac88729/1611774754355-689HQNWODY9ZDH9E07BT/Unintentional+Cartwheels+11x11+Mixed+Media+Acrylic+Glass+Abstract.jpg' },
      { id: '5', title: 'Future Vision', image: 'https://img.artpal.com/68927/12-23-8-27-16-49-51m.jpg' },
      { id: '6', title: 'Digital Canvas', image: 'https://onlineframing.in/cdn/shop/files/OK2OKN1copy.png?v=1708147309' },
      { id: '7', title: 'Neon Flow', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/51056286200305.5d9273310513d.jpg' }
    ],
    Photography: [
      { id: '8', title: 'Nature Photo', image: 'https://m.media-amazon.com/images/I/A1FzhHppFrL._AC_UF1000,1000_QL80_.jpg' },
      { id: '9', title: 'City Life', image: 'https://www.tallengestore.com/cdn/shop/products/Fantasy_20World_20of_20a_20Kid_e4ee1775-2167-4d14-994d-245d643eb97d_large.jpg?v=1568961397' },
      { id: '10', title: 'Golden Hour', image: 'https://iso.500px.com/wp-content/uploads/2014/09/2048-8.jpg' },
      { id: '11', title: 'Wilderness', image: 'https://static.wixstatic.com/media/ec6602_7e593ba049ff4088951407b418616ad5~mv2.jpg/v1/fill/w_640,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ec6602_7e593ba049ff4088951407b418616ad5~mv2.jpg' },
      { id: '12', title: 'Urban Shadows', image: 'https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2018/05/featured1-8.jpg' },
      { id: '13', title: 'Portrait Glow', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZM8jOGjFx6jfotq6TZ0CrMtCTlmBdCzn0bw&s' },
      { id: '14', title: 'Night Streets', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWKL0lhN_PTDQt_zT86hxfTVtdZz3BGI84VA&s' }
    ],
    '3D Art': [
      { id: '15', title: '3D Creation', image: 'https://discover.therookies.co/content/images/2022/08/12-2.jpg' },
      { id: '16', title: 'Sculpture Design', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLIS7TI6CX3Bg0PfOLr9_9NmVqkWfrPN-RhA&s' },
      { id: '17', title: 'Voxel Art', image: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/39032238069811.57554009473d0.jpg' },
      { id: '18', title: '3D Reality', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRceeL689g-0geQxY3urX4oyTO85A_vhmLzVg&s' },
      { id: '19', title: 'Modern Sculpt', image: 'https://i.etsystatic.com/8693184/r/il/36e9c4/2260253722/il_570xN.2260253722_7fkc.jpg' },
      { id: '20', title: 'Digital Sculpture', image: 'https://aaagameartstudio.com/wp-content/uploads/2023/05/3d-sculpting-face.png' },
      { id: '21', title: 'Virtual Terrain', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyTbZPP9XZVj3f0wC6KkZMcuVayBzOmN-yg&s' }
    ],
    Abstract: [
      { id: '22', title: 'Abstract Painting', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPlacF1Zvwz89VL0SuSgduDW_WMfF9xdFeCQ&s' },
      { id: '23', title: 'Color Blast', image: 'https://img.freepik.com/premium-photo/abstract-color-blast-background_1009247-68.jpg' },
      { id: '24', title: 'Geometric Flow', image: 'https://img.freepik.com/premium-photo/vibrant-abstract-painting-featuring-mans-face-center-surrounded-by-kaleidoscope-colorful-geometric-shapes-cubist-interpretation-money-flow-ai-generated_538213-19682.jpg' },
      { id: '25', title: 'Chaos Theory', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbz_5PWA_9Lj10UjfLPvVIILhg5hPatjLZ2Q&s' },
      { id: '26', title: 'Texture Layers', image: 'https://img.pikbest.com/wp/202343/texture-oil-painting-vivid-and-textured-a-colorful-abstract-with-high-quality-details-intricate-paint-layers_9977689.jpg!sw800' },
      { id: '27', title: 'Artistic Vibe', image: 'https://i.ytimg.com/vi/HivIIvFLWWg/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gQSgTMA8=&rs=AOn4CLDVyoNKTy7axXwD09asnz6QURjaGw' },
      { id: '28', title: 'Mystery Shapes', image: 'https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-107966302/107966302.jpg' }
    ],
    Surrealism: [
      { id: '29', title: 'Dream World', image: 'https://mymodernmet.com/wp/wp-content/uploads/archive/NiISUp9h-in8j0PslOcJ_rhads1.jpeg' },
      { id: '30', title: 'Unreal Reality', image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8ea165b2-8225-4c88-90bc-0fccbec0fb0c/dgtin7t-45ad2351-925e-48bc-8958-3c9adee42913.jpg/v1/fill/w_1280,h_569,q_75,strp/a_journey_through_the_mind_of_reality_in_unreal_by_webartgallery_dgtin7t-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhlYTE2NWIyLTgyMjUtNGM4OC05MGJjLTBmY2NiZWMwZmIwY1wvZGd0aW43dC00NWFkMjM1MS05MjVlLTQ4YmMtODk1OC0zYzlhZGVlNDI5MTMuanBnIiwiaGVpZ2h0IjoiPD01NjkiLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwid21rIjp7InBhdGgiOiJcL3dtXC84ZWExNjViMi04MjI1LTRjODgtOTBiYy0wZmNjYmVjMGZiMGNcL3dlYmFydGdhbGxlcnktNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.Rymo7lvTbV3u6-ch6HcUxWCsI9aPeeqElJPGV_zjxgM' },
      { id: '31', title: 'Fantasy Space', image: 'https://img.freepik.com/premium-photo/landscape-planet-deep-space-surreal-fantasy-cosmos-space-digital-artwork_552988-3983.jpg' },
      { id: '32', title: 'Lucid Dreams', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouAKTKCOzG_W8mKAJyHrn0WJn2Dn_S-fzpw&s' }
    ]
  };

  // Filter artwork data based on search query
  const filteredArtworks = () => {
    if (!searchQuery) {
      return artworkData[selectedCategory]; // If no search, return selected category data
    }

    const allArtworks = Object.values(artworkData).flat();
    return allArtworks.filter((artwork) =>
      artwork.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const renderCategorySection = () => (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.categoryCard, item === selectedCategory && styles.selectedCategory]}
            onPress={() => {
              setSelectedCategory(item);
              setSearchQuery(''); // Clear search when changing category
            }}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  const renderFilteredArtworks = () => (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>
        {searchQuery ? `Search Results for "${searchQuery}"` : `${selectedCategory} Artworks`}
      </Text>
      <FlatList
        horizontal
        data={filteredArtworks()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.artworkCard}>
            <Image source={{ uri: item.image }} style={styles.artworkImage} />
            <Text style={styles.artworkTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <ImageBackground 
      source={{ uri: 'https://img.freepik.com/free-vector/blue-fluid-background-frame_53876-99019.jpg?semt=ais_hybrid' }} // Replace with your background image URL
      style={styles.background}
      imageStyle={styles.imageBackground} // To apply blur
    >
      <View style={styles.overlay}>
        <FlatList
          ListHeaderComponent={
            <>
              {/* Search Bar */}
              <View style={styles.searchContainer}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search artwork, artists, or categories"
                  placeholderTextColor="#666" // Adjust placeholder color for better visibility
                  value={searchQuery}
                  onChangeText={(text) => setSearchQuery(text)}
                />
              </View>
              {renderCategorySection()}
              {renderFilteredArtworks()}
            </>
          }
          data={[]} // No data to render as all content is in ListHeaderComponent
          renderItem={null}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensure the background image covers the entire screen
  },
  imageBackground: {
    blurRadius: 10, // Apply blur effect
    opacity: 0.6, // Adjust opacity for better contrast
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.6)', // Semi-transparent overlay for readability
    padding: 20,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    color: '#000', // Text color
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  categoryCard: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#dfe4ea',
    borderRadius: 20,
    marginRight: 12,
  },
  selectedCategory: {
    backgroundColor: '#74b9ff',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  artworkCard: {
    marginRight: 16,
    alignItems: 'center',
    width: 200, // Adjust width as needed
  },
  artworkImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 8,
  },
  artworkTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  listContent: {
    paddingBottom: 20,
  }
});
