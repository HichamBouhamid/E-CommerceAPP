import { Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import styles from './profile.style';
import { COLORS } from '../constants';
import { AntDesign, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({navigation}) => {
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
      }else{
        navigation.navigate('Login')
      }
    } catch (error) {
      console.log("Error retrieving the data:", error)
    }
  }

  const userLogout = async () => {
    const id = await AsyncStorage.getItem('id')
    const useId = `user${JSON.parse(id)}`
    try {
      await AsyncStorage.multiRemove([useId, 'id'])
      navigation.replace('Bottom Navigation')
    } catch (error) {
      console.log("Error logging out the user", error)
    }
  }
  const logout = () => {
  Alert.alert(
    'Logout',
    'Are you sure you want to log out',
    [
      {
        text: "Cancel", onPress: () => console.log("cancel pressed")
      },
      {
        text: "Continue", onPress: () => userLogout()
      },
      {defaultIndex: 1}
    ]
  )
}
const clearCache = () => {
  Alert.alert(
    'Clear Cache',
    'Are you sure you want to clear cache',
    [
      {
        text: "Cancel", onPress: () => console.log("cancel pressed")
      },
      {
        text: "Continue", onPress: () => console.log("delete pressed")
      },
      {defaultIndex: 1}
    ]
  )
}
const deleteAccount = () => {
  Alert.alert(
    'Delete',
    'Are you sure you want to delete account',
    [
      {
        text: "Cancel", onPress: () => console.log("cancel pressed")
      },
      {
        text: "Continue", onPress: () => console.log("logout pressed")
      },
      {defaultIndex: 1}
    ]
  )
}
  return (
    <View style={styles.container}> 
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray}/>
        <View style={{width: '100%'}}>
          <Image 
          source={require('../assets/images/login.jpg')}
          style={styles.cover}
          />
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profile}
            />
            <Text style={styles.name}>
              {userLogin === true ? "hicham": "Please login into your account"}
            </Text>
            {userLogin === false ? (
              <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <View style={styles.loginBtn}>
                  <Text style={styles.menuText}>L O G I N      </Text>
                </View>
              </TouchableOpacity>
            ):(
              <View style={styles.loginBtn}> 
                  <Text style={styles.menuText}>dddsdsds </Text>
              </View>
            )
            }
          {userLogin === false ? (
            <View></View>
          ):(
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={()=>{}}>
                <View style={styles.menuItem(0.25)}> 
                  <MaterialCommunityIcons 
                    name="heart-outline"
                    color={COLORS.black}
                    size={24}
                  />
                  <Text style={styles.menuText}>Favorites</Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{}}>
                <View style={styles.menuItem(0.25)}> 
                  <MaterialCommunityIcons 
                    name="truck-delivery-outline"
                    color={COLORS.black}
                    size={24}
                  />
              <Text style={styles.menuText}>Orders</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}}>
                <View style={styles.menuItem(0.25)}> 
                  <SimpleLineIcons  
                    name="bag"
                    color={COLORS.black}
                    size={24}
                  />
              <Text style={styles.menuText}>Cart</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>deleteAccount()}>
                <View style={styles.menuItem(0.25)}> 
                  <AntDesign 
                    name="deleteuser"
                    color={COLORS.black}
                    size={24}
                  />
              <Text style={styles.menuText}>Delete Account</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>logout()}>
                <View style={styles.menuItem(0.25)}> 
                  <AntDesign 
                    name="logout"
                    color={COLORS.black}
                    size={24}
                  />
              <Text style={styles.menuText}>Logout</Text>
            </View>
            </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

export default Profile
