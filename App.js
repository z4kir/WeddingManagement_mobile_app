import 'react-native-gesture-handler';
import React, { useState,useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { auth } from './firebase';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppLoading from 'expo-app-loading';
import { Provider as PaperProvider } from 'react-native-paper';
import DrawerComponent from './customeDrawer/DrawerComponent';










export default function App() {

  
  
  LogBox.ignoreLogs(['AsyncStorage has','Setting a timer','Warning:'])
  // LogBox.ignoreLogs('AsyncStorage has been extracted')


  // Check user already login or not
  const [isReady, setisReady] = useState(false)

  const [loggedIn, setloggedIn] = useState()

  // const [isRender, setisRender] = useState(false)


 

  useEffect(() => {


  
      
      auth.onAuthStateChanged((user) => {
         if (user) {
           setloggedIn(true)
           
         }
         else{
           setloggedIn(false)
         }
         setisReady(true);
      });
     ;
      
   
  }, [])

  useEffect(()=>{

  },[isReady])

  





  const Stack=createNativeStackNavigator();
  if (!isReady) {
    return <AppLoading />
    
  } else {
    
    return (
  
      
      <PaperProvider >
      <NavigationContainer>
      <Stack.Navigator screenOptions={{animation:'slide_from_right'}} initialRouteName={loggedIn? 'root' :'Login'}>
       
        <Stack.Screen options={{ headerShown: false }} name='root' component={DrawerComponent}/>
        <Stack.Screen options={{animation:'slide_from_left',headerShown:false}} name="Login" component={LoginScreen} />            
        <Stack.Screen  name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
      </PaperProvider>
    );
  }
}


