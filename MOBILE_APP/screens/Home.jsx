import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react';
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from "./home.style";
import { Welcome } from '../components';
import Slider from '../components/home/Slider';
import Heading from '../components/home/Heading';
import Products from '../components/products/Products';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';


const Home = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    checkExistingUser();
  },[]);
  const checkExistingUser = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`
    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if(currentUser.id != null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData)
        setUserLogin(true)
      }
    } catch (error) {
      console.log("Error retrieving the data:", error)
    }
  }
  return (
    <SafeAreaView>
      <View style={styles.appBarStyle}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />

          <Text styles={styles.location}> { userData ? userData.location : 'Fès Morocco'} </Text>
          <View style={{ alignItems: "flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>0</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Cart')}>
            <Fontisto name='shopping-bag' size={24}/>
            </TouchableOpacity>
          </View>
      </View>
      </View>
      <ScrollView>
        <Welcome />
        <Slider />
        <Heading />
        <Products />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

