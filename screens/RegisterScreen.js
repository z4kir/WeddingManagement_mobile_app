import React, { useState, useEffect } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import {  AuthCredential, createUserWithEmailAndPassword ,sendEmailVerification} from "firebase/auth"
import {  ref,set,onValue} from "firebase/database"
import { auth,db } from '../firebase'
import {FloatingLabelInput} from 'react-native-floating-label-input'
import { Entypo } from "@expo/vector-icons";




const RegisterScreen = () => {

  

    const navigation = useNavigation();
    
  

    // user deatails

    const [userName, setuserName] = useState({
        firstName: '',
        lasteName: '',
    })

    // const [userId, setuserId] = useState()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [mobileNumber, setmobileNumber] = useState('')
    const [address, setaddress] = useState('')
    const [checkPasswords, setcheckPasswords] = useState(true)

    /* Password Hide and show syntax */

    const [show, setshow] = useState(false)
    const [confirmShow, setconfirmShow] = useState(false)

    useEffect(() => {
        
    }, [show] || [confirmShow])
    
  
            
            // method for matching passwrods
        
        
            const checkConfirmPassword = () => {
                if (password === confirmPassword && !(confirmPassword == '') && !(password == '') && !(email == '')) {
        
                 handleSignUp();
        
                } else {
                    if (confirmPassword == '' || password == '' || email == '') {
                        setcheckPasswords(null)
                    }
                    else {
                        setcheckPasswords(false)
                    }
                }
            }
        
    // method for sign up authentication

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
             
               
                userDetailsSet(userCredential.user.uid);


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });
    }
    // Database storing

    const userDetailsSet=(uid)=>{
        const reference=ref(db,"users/"+uid)

        set(reference,{
            FirstName:userName.firstName,
            LasteName:userName.lasteName,
            Email:email,
            Mobile:mobileNumber,
            Address:address
        })
        .then(()=>{navigation.navigate('Login')})
        .catch((error)=>{
            console.log(error.message);
        })
        

    }




    return (
        <KeyboardAvoidingView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                    <Text style={{ textAlign: 'center', fontSize: 24, marginBottom: 10 }}>Register</Text>

                    <FloatingLabelInput
                       autoFocus
                       containerStyles={style.textContainer}
                       inputStyles={style.inputtextstyle}
                       customLabelStyles={{fontSizeFocused:12,leftFocused:-5}}
                       label="First Name"
                        value={userName.firstName}
                        onChangeText={text => { setuserName({ ...userName, firstName: text }) }}

                    />

                    <FloatingLabelInput
                        containerStyles={style.textContainer}
                        inputStyles={style.inputtextstyle}
                        customLabelStyles={{fontSizeFocused:12,leftFocused:-5}}
                        label='Last Name'
                        value={userName.lasteName}
                        onChangeText={text => { setuserName({ ...userName, lasteName: text }) }}

                    />

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
                    <FloatingLabelInput
                        containerStyles={style.textContainer}
                        inputStyles={style.inputtextstyle}
                        customLabelStyles={{fontSizeFocused:12,leftFocused:-5}}
                        label='confirm password'
                        value={confirmPassword}
                        isPassword
                        onTogglePassword={confirmShow}
                        onChangeText={text => { setconfirmPassword(text) }}
                        customHidePasswordComponent={<Entypo style={{fontSize:20}} name='eye'/>}
                        customShowPasswordComponent={<Entypo style={{fontSize:20}} name='eye-with-line'/>}

                    />

                    <FloatingLabelInput
                        containerStyles={style.textContainer}
                        inputStyles={style.inputtextstyle}
                        customLabelStyles={{fontSizeFocused:12,leftFocused:-5}}
                        label='Mobile Number'
                        keyboardType='numeric'
                        maxLength={10}
                        value={mobileNumber}
                        onChangeText={text => { setmobileNumber(text) }}

                    />

                    <FloatingLabelInput
                        multiline
                        numberOfLines={4} 
                        
                        containerStyles={style.textAreaContainer}
                        inputStyles={style.inputtextstyle}
                        customLabelStyles={{fontSizeFocused:12,leftFocused:-5}}
                        label='Address'
                        value={address}
                        onChangeText={text => { setaddress(text) }}
                    />

                    {checkPasswords == null
                        ? <Text style={{ alignSelf: 'center', color: 'red', marginTop: 10 }}>Credential can't be null</Text>
                        : checkPasswords
                            ? null
                            : <Text style={{ alignSelf: 'center', color: 'red', marginTop: 10 }}>Passwords Not Matching</Text>}


                    <TouchableOpacity underlayColor='blue' activ style={style.Register} activeOpacity={0.4} onPress={() => { checkConfirmPassword() }}>
                        <Text style={style.RegisterText}>Registor</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({

    container: {
        alignContent: 'center',
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'

    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '200'

    },

    // Register Header style

    Register: {
        marginTop: 10,
        width: 300,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        borderRadius: 5,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: 'blue',
        height: 40
    },

    RegisterText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },

    // Floating Label style
    textContainer:{
        borderBottomWidth:1,
        marginBottom:10,
        borderBottomColor:'black',
        height:40,       
    },
    textAreaContainer:{
        borderBottomWidth:1,
        bottom:10,
        borderBottomColor:'black',
  
    },
    inputtextstyle:{
        fontSize:16,
        paddingStart:5,
        paddingTop:8,
        color:'black'
    }
})



export default RegisterScreen
