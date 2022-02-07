

import { useNavigation } from '@react-navigation/native'
import { signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import { auth } from '../firebase'


const HomeScreen = () => {
  
    const navigation=useNavigation();
      // Sign Out handling method

      const handleSignOut = () => {
    
        signOut(auth)
            .then(() => {
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error)
            })

    }



    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', textAlign: 'center' }}>HomeScreen</Text>
            <TouchableOpacity style={style.signIn} onPress={()=>{handleSignOut()}} activeOpacity={0.4}>
                    <Text style={style.signInText}>Sign Out</Text>
                </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    signIn: {
        marginTop:10,
        width: 300,
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf:'center',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'blue',
        height:40
    },

    signInText: {
        fontSize: 18,
        color: 'white',
        textAlign:'center'
    },
})

export default HomeScreen
