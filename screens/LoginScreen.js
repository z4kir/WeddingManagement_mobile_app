import React, { useState,useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, TouchableHighlight } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import RegisterScreen from './RegisterScreen';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import {Entypo} from '@expo/vector-icons'



const LoginScreen = () => {
    
    const navigation=useNavigation();


    /* Password Hide and show syntax */


    const [show, setshow] = useState(false)

    useEffect(() => {
        
    }, [show] || [confirmShow])
    
    
    

    

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    
    const [loginFailMessage, setloginFailMessage] = useState(null)
     
 
    useEffect(() => {
        
            setloginFailMessage(null)
        
    }, [])
    


   const handleSignIn=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;

      navigation.navigate('root')
      

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setloginFailMessage(errorMessage)
    });
   }



  


    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 10 }}>Login</Text>
                <FloatingLabelInput
                        containerStyles={style.textContainer}
                        inputStyles={style.inputtextstyle}
                        customLabelStyles={{fontSizeFocused:12,leftFocused:-5}}
                        label='Email'
                        value={email}
                        onChangeText={text => { setemail(text) }}
                    />
                    <FloatingLabelInput
                        containerStyles={style.textContainer}
                        inputStyles={style.inputtextstyle}
                        customLabelStyles={{fontSizeFocused:12,leftFocused:-5}}
                        label='password'
                        value={password}
                        isPassword={true}
                        onChangeText={text => { setpassword(text) }}
                        onTogglePassword={show}
                        customHidePasswordComponent={<Entypo style={{fontSize:20}} name='eye'/>}
                        customShowPasswordComponent={<Entypo style={{fontSize:20}} name='eye-with-line'/>}

                    />
                {loginFailMessage == null 
                ?null
                : <Text style={{ alignSelf: 'center', color: 'red', marginTop: 10 }}>Password or email is wrong</Text>}
          
                <TouchableOpacity style={style.signIn} onPress={()=>{handleSignIn()}} activeOpacity={0.4}>
                    <Text style={style.signInText}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity underlayColor='blue' activ  style={style.Register} activeOpacity={0.4} onPress={()=>{navigation.navigate("Register")}}>
                    <Text style={style.RegisterText}>Registor</Text>
                </TouchableOpacity>
            </View>
           
        </KeyboardAvoidingView>
        
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


    // Login Header style
    Register: {
        width: 300,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        alignSelf:'center',
        borderRadius: 5,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'blue',
        height:40

    },
    RegisterText: {
        fontSize: 18,
        color: 'blue',
        textAlign:'center'

    },
    
    // Floating Label style
    textContainer:{
        borderBottomWidth:1,
        marginBottom:10,
        borderBottomColor:'black',
        height:40,       
    },
 
    inputtextstyle:{
        fontSize:16,
        paddingStart:5,
        paddingTop:8,
        color:'black'
    }


})


export default LoginScreen
