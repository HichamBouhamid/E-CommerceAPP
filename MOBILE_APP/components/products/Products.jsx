import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import ProductCard from './ProductCard'
import useFetch from '../../hook/useFetch'
import styles from './products.styles'


const Products = () => {
  const {data, isLoading, error} = useFetch();
  
  return (
    <View style={{marginTop: SIZES.medium}}>
      {isLoading ? (
      <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
      ): error ? (
        <Text> Something went wrong </Text>
      ):(
      <FlatList 
        data={data}
        keyExtractor={(item) => item._id}
        horizontal
        renderItem={({ item }) => <ProductCard item={item}/>}
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
      
      )}
    </View>

  )
}

export default Products