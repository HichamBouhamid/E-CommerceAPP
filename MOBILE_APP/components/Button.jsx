import { View, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const Button = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Ionicons
            name='chevron-back-circle'
            size={30}
            colot={COLORS.black}
        />
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        position: 'absolute',
        zIndex: 999,
        top: SIZES.large-10

    }
})