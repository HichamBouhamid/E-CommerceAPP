import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Btn } from '../components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import styles from './login.style';
import { COLORS } from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .max(8, 'Invalid password')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
});

const Login = ({navigation}) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false);
  const inValidForm = () => {
    Alert.alert(
      'Invalid Login',
      'Make sure of your informations',
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

  const login = async (values) => {
    setLoader(true)
    try {
      const endpoint = "http://26.10.4.7:3000/api/login"
      const data = values;

      const response = await axios.post(endpoint, data)
      if (response.status === 200) {
        setLoader(false);
        setResponseData(response.data);
        console.log(response.data)
        navigation.replace('Bottom Navigation');
        
            
      }else{
        Alert.alert(
          'Error Logging in',
          'Please provide a valid credentials',
          [
            {
              text: "Cancel", onPress: () => {}
            },
            {
              text: "Continue", onPress: () => {}
            },
            {defaultIndex: 1}
          ]
        )
      }
    } catch (error) {
      Alert.alert(
        'Error',
        "Oops, Error logging in try again",
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
    }finally{
      setLoader(false)
    }
  }
  return (
    <GestureHandlerRootView>
    <ScrollView>
      <SafeAreaView style={{marginHorizontal: 20}}>
        <View>
          <Button onPress={()=> navigation.goBack()}/>
          <Text style={styles.title}>Login</Text>
          <Formik
             initialValues={{email: "", password: ""}}
             validationSchema={validationSchema}
             onSubmit={values => login(values)}
          >
        {({ handleChange, handleBlur, touched, handleSubmit, values, errors, isValid, setFieldTouched }) => (
       <View>
        <View style={styles.wrapper}>
         <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper(touched.email ? COLORS.secondary: COLORS.offwhite)}>
            <MaterialCommunityIcons 
              name='email-outline'
              size={20}
              color={COLORS.gray}
              style={styles.iconStyle}
            />
            <TextInput
              placeholder="Enter email address"
              onFocus={()=>{setFieldTouched('email')}}
              onBlur={()=>{setFieldTouched('email', '')}}
              value={values.email}
              onChangeText={handleChange('email')}
              autoCapitalize='none'
              autoCorrect={false}
              style={{flex: 1}}
            />
            
          </View>
          {touched.email && errors.email && (
            <Text style={styles.errorMessage}>{errors.email}</Text>
          )}
       </View>
       <View style={styles.wrapper}>
         <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper(touched.password ? COLORS.secondary: COLORS.offwhite)}>
            <MaterialCommunityIcons 
              name='lock-outline'
              size={20}
              color={COLORS.gray}
              style={styles.iconStyle}
            />
            <TextInput
            secureTextEntry={obsecureText}
              placeholder="Enter password..."
              onFocus={()=>{setFieldTouched('password');}}
              onBlur={()=>{setFieldTouched('password', '')}}
              value={values.password}
              onChangeText={handleChange('password')}
              autoCapitalize='none'
              autoCorrect={false}
              style={{flex: 1}}
            />
          <TouchableOpacity onPress={()=> {setObsecureText(!obsecureText)}}>
            <MaterialCommunityIcons 
            name={obsecureText? "eye-outline" : "eye-off-outline"}
            size={18}
            />
          </TouchableOpacity>
            
          </View>
          {touched.password && errors.password && (
            <Text style={styles.errorMessage}>{errors.password}</Text>
          )}
       </View>
       
        <Btn loader={loader} title={"L O G I N"} onPress={isValid ?handleSubmit: inValidForm  } isValid={isValid}/>
        <Text style={styles.registration} onPress={()=> {navigation.navigate('SignUp')}}>Register</Text>
        </View>
              )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
    </GestureHandlerRootView>
    
  )
}

export default Login