import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { DrawerContent } from './DrawerContent'

const Drawer=createDrawerNavigator();

const DrawerComponent = () => {
    return (
        
        <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>}>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name='Profile' component={ProfileScreen}/>

        </Drawer.Navigator>
        
    )
}





export default DrawerComponent
