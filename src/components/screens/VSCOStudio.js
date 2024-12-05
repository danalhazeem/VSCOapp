import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';


const imageUrls = Array(20).fill().map((_, index) => ({
  id: `${index + 1}`,
  uri: `https://picsum.photos/400/400?random=${index + 1}`,
}));

export default function VSCOStudio({ navigation }) {
  const [viewMode, setViewMode] = useState('grid');

  const renderItem = ({ item }) => (
    <View style={styles.imageItem}>
      <Image source={{ uri: item.uri }} style={styles.image} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

    
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.viewIcons}>
          <TouchableOpacity onPress={() => setViewMode('grid')}>
            <Feather name="grid" size={24} color={ '#999'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setViewMode('list')} style={styles.listIcon}>
            <Feather name="list" size={24} color={ '#999'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Discover')}>
            <Feather name="compass" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>Studio</Text>
      <TouchableOpacity style={styles.filterButton}>
        <Text style={styles.filterButtonText}>Sort and filter</Text>
      </TouchableOpacity>
      <FlatList
        data={imageUrls}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={viewMode === 'grid' ? 3 : 1}
        key={viewMode}
        contentContainerStyle={styles.imageList}
      />
    </View>
    </SafeAreaView>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  viewIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listIcon: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    color: 'white',
  },
  filterButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 20,
  },
  filterButtonText: {
    fontSize: 14,
    color: 'white',
  },
  imageList: {
    paddingHorizontal: 5,
  },
  imageItem: {
    flex: 1,
    margin: 5,
    aspectRatio: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});

