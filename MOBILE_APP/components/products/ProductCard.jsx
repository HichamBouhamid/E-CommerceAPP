import { TouchableOpacity, View, Text, Image, Alert } from 'react-native'
import React from 'react'
import styles from './productcard.style'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../constants'
import axios from 'axios';

const ProductCard = ({item}) => {
const navigation = useNavigation();
const { userId, cartItem, quantity } = item;

const addProduct = async() => {
    try {
      
        const response = await axios.post('http://192.168.1.102:3000/api/cart', {userId, cartItem, quantity});
        console.log(response)

    } catch (error) {
      
     console.error(error)

    }
  }
const addToCart = () => {
    Alert.alert(
      'Add To Cart',
      'Are you sure you want to add product ?',
      [
        {
          text: "Cancel", onPress: () => console.log("cancel pressed")
        },
        {
          text: "Continue", onPress: () => addProduct()
        },
        {defaultIndex: 1}
      ]
    )
  }
    return (
        <TouchableOpacity onPress={() =>navigation.navigate("ProductDetails", {item})}>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image 
                source={{
                uri: item.imageUrl,
                }}
                style={styles.image} 
                />
            </View>

            <View style={styles.details}>
                <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.supplier} numberOfLines={1}>{item.supplier}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addButton} onPress={()=> addToCart() }>
                    <Ionicons name="add-circle" size={35} color={COLORS.primary} />
            </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard