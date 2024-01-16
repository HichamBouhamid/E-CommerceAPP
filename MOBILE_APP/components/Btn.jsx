import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS } from '../constants'

const Btn = ({title, onPress, isValid , loader}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnStyle(isValid === false? COLORS.gray: COLORS.primary)}>
        {loader === false ? (
          <Text style={styles.btnTxt}>{title}</Text>
        ) : (
          <ActivityIndicator />
        )}
        
    </TouchableOpacity>
  )
}

export default Btn

const styles = StyleSheet.create({
    btnTxt: {
        fontFamily: "bold",
        color: COLORS.lightWhite,
        fontSize: 18,
    },
    btnStyle:(backgroundColor)=> ({
        height: 50,
        width: '100%',
        marginVertical: 20,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        borderRadius: 12,
        alignItems: "center",
    })
})