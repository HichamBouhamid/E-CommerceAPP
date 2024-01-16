import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Cart, ProductDetails, NewRivals, Login, SignUp } from './screens';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fonts] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const onLayoutRootView = useCallback(async() => { 
    if (fonts){ 
      await SplashScreen.hideAsync();
    }
  }, [fonts]);
   if (!fonts){
   return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Bottom Navigation'
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
        />
        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ProductDetails'
          component={ProductDetails}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='ProductList'
          component={NewRivals}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Login'
          component={Login}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}


