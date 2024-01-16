import { View, Text } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'
import { ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import styles from './productsList.style'
import { FlatList } from 'react-native'
import SearchCard from './SearchCard'

const CartList = () => {
const {data, isLoading, error} = useFetch()

  return (
    <View style={{marginTop: 80}}>
      {isLoading ? (
      <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
      ): error ? (
        <Text> Something went wrong </Text>
      ):(
      <FlatList 
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <SearchCard item={item}/>}
        contentContainerStyle={{columnGap: SIZES.medium}}
      />
      
      )}
    </View>
    )
  }
    
export default CartList