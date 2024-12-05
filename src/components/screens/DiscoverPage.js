import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const imageSize = windowWidth * 0.7; // 70% of screen width

const categories = [
  'Favorites',
  'Inspiring',
  'Selects',
  'Editorial',
  'Just for You',
  'Melanin',
];

const generateImages = (category, count) => 
  Array(count).fill().map((_, index) => ({
    id: `${category}_${index + 1}`,
    uri: `https://picsum.photos/800/600?random=${category}_${index + 1}`,
    username: `user_${category}_${index + 1}`,
  }));

const categoryImages = categories.reduce((acc, category) => {
  acc[category] = generateImages(category.toLowerCase().replace(/\s/g, '_'), 10);
  return acc;
}, {});

const CategorySection = ({ category, images }) => (
  <View style={styles.categorySection}>
    <Text style={styles.categoryTitle}>{category}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {images.map((item) => (
        <TouchableOpacity key={item.id} style={styles.imageItem}>
          <Image source={{ uri: item.uri }} style={styles.image} />
          <Text style={styles.username}>{item.username}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  </View>
);

export default function DiscoverPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>


    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discover</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Studio')}>
          <Feather name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {categories.map((category) => (
          <CategorySection key={category} category={category} images={categoryImages[category]} />
        ))}
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  categorySection: {
    marginTop: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color: 'white',
  },
  imageItem: {
    marginLeft: 20,
    width: imageSize,
    height: imageSize * 0.75, // 4:3 aspect ratio
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  username: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

