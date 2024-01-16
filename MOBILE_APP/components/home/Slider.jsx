import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Slider = () => {
  const slides= [
    "https://cdn-bnofo.nitrocdn.com/YCOqbulOWPTbigaUOflqfvBCmkFuxfWf/assets/images/optimized/rev-b97279e/www.wepc.com/wp-content/uploads/2020/08/Best-PC-gaming-accessories--718x.jpg",
    "https://megamodz.com/media/10/00/yl/c5/f6ac1400d90f308e0c1124666a709e9f.jpeg"
  ]
  return (
    <View style={styles.sliderContainer}>
    <SliderBox
      images={slides}
      dotColor={COLORS.primary}
      inactiveColor={COLORS.primary}
      autoplay
      ImageComponentStyle={{borderRadius: 15, width: "92%", marginTop: 5}}
      circleloop
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})