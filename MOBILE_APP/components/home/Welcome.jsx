import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
   

    <View style={styles.searchBar}>
      <TouchableOpacity>
        <Feather name="search" size={22} style={styles.searchIcon}/>
      </TouchableOpacity>
      <View style={styles.searchWrapper}>
        <TextInput 
        style={styles.searchInput}
        value=""
        onPressIn={() => navigation.navigate("Search")}
        placeholder="What are you looking for ?"
        />
        </View>
    <View>
      <TouchableOpacity style={styles.searchButton}>
        <Ionicons name="camera-outline" size={SIZES.xLarge} color={COLORS.primary}/>
      </TouchableOpacity>
    </View>
      </View>

    </View>
  )
}

export default Welcome