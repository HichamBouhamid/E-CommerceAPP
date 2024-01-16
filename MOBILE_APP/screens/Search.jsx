import { TextInput, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react';
import styles from './search.style'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SearchCard from '../components/products/SearchCard';


const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = async() => {
    try {
      
      const response = await axios.get(`http://192.168.1.102:3000/api/products/search/${searchKey}`);
      setSearchResults(response.data)

    } catch (error) {
      
      setSearchResults("");
    }
  }

  return (
    <GestureHandlerRootView>
    <SafeAreaView>
      <View style={styles.searchBar}>
      <TouchableOpacity>
        <Ionicons name="camera-outline" size={SIZES.xLarge} style={styles.searchIcon}/>
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput 
        style={styles.searchInput}
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder="What are you looking for ?"
        />
        </View>
    <View>
      <TouchableOpacity style={styles.searchButton} onPress={()=>handleSearch()}>
        <Feather name="search" size={22} color={COLORS.primary}/>
      </TouchableOpacity>
    </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{flex: 1}}>
          <Image 
          source={require('../assets/images/search.png')}
          style={styles.searchImage}
          />

        </View>
      ):(
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (<SearchCard item = {item}/>)}
        style={{marginHorizontal:12}}
        />
      )}
    </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Search
