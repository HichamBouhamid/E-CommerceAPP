import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import styles from './newRivals.style';
import CartList from '../components/products/CartList';


const Cart = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite} />
          </TouchableOpacity>
          <Text style={styles.heading}>Cart</Text>
        </View>
        <CartList />
      </View>
    </SafeAreaView>
  )
}

export default Cart

