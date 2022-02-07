import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'
import { Avatar, Card, Paragraph, Title, Divider, Button } from 'react-native-paper'
import {Name,Email,Mobile,Address} from '../details/profileDetaileOfCurrentUser';


const ProfileScreen = () => {

    const disp = Dimensions.get('screen').width
    const cardWidth = (disp * 90) / 100;
    const avtarWidth = (disp * 50) / 100;

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ justifyContent: 'center', width: cardWidth ,paddingBottom:10}}>

                <Avatar.Image style={{ alignSelf: 'center', top: 8 }} source={{ uri: 'https://picsum.photos/700' }} size={avtarWidth} />
                <Card.Content style={{ paddingTop: 10 }}>
                    <Title style={{ textAlign: 'center' }}>
                        {Name}
                    </Title>

                    {/* Heading colunm */}

                    <View style={style.infoBox}>
                        <View style={style.Column}>
                            <View style={style.headingRow} >
                                <Text style={style.headingRowText} >
                                    E-mail
                                </Text>
                            </View>
                            <Divider style={style.Divder} />
                            <View style={style.headingRow} >
                                <Text style={style.headingRowText} >
                                    Contact No
                                </Text>
                            </View>
                            <Divider style={style.Divder}  />
                            <View style={style.headingRow} >
                                <Text style={style.headingRowText} >
                                    Address
                                </Text>
                            </View>
                            <Divider style={style.Divder} />
                        </View>

                        {/* Info column */}

                        <View style={style.Column}>
                            <View style={style.infoRow} >
                                <Text style={style.infoRowText } >
                                    {Email}
                                </Text>
                            </View>
                            <Divider style={style.Divder} />
                            <View style={style.infoRow} >
                                <Text style={style.infoRowText}>
                                    {Mobile}
                                </Text>
                            </View>
                            <Divider style={style.Divder} />
                            <View style={style.infoRow} >
                                <Text style={style.infoRowText}>
                                    {Address}
                                </Text>
                            </View>
                            <Divider style={style.Divder} />


                        </View>
                    </View>


                </Card.Content>
                <Card.Actions style={style.buttonContainer}>
                   <View>

                    <Button style={style.button} mode='contained'>Edit Profile</Button>
                    <Button color='grey' style={style.button} mode='contained'>Change profile photo</Button>
                   </View>
                  

                </Card.Actions>

            </Card>
        </View>
    )
}

const style = StyleSheet.create({
    infoBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5
    },
    Column: {
        flexDirection: 'column',
        
    },
    headingRow: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:8
   
    },
    infoRow: {
        justifyContent: 'center', 
        alignItems: 'center',
       
        marginTop:8
   
    },
    headingRowText:{
        textAlign: 'center', 
        fontWeight: 'bold',
        fontSize:16
    },
    infoRowText:{
        textAlign: 'center',
        fontSize:16


    },

    Divder: {
       height: 1.5, 
       marginTop:8
    },
    buttonContainer:{
        justifyContent:'center'
    },
    button:{
        marginTop:5
    }

})

export default ProfileScreen
