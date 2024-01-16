import { View, Text } from 'react-native'
import React from 'react'
import useFetch from '../../hook/useFetch'
import { ActivityIndicator } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import styles from './productsList.style'
import { FlatList } from 'react-native'
import ProductCard from './ProductCard'

const ProductsList = () => {
const {data, isLoading, error} = useFetch()

  return (
    <View style={styles.loadingContainer}>
    {isLoading ? (
      <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
    ): error ? (
    <Text>Something is wrong</Text>
    ):(
    <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        numColumns={2}
        renderItem={({item}) => (<ProductCard item={item}/>)}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={()=><View style={styles.seperator}/>}
        />
      )}
     </View>
    )
  }
    
export default ProductsList