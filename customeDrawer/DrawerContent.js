import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons'


import { signOut } from 'firebase/auth';
import { auth, db } from '../firebase';
import { onValue, ref } from 'firebase/database'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import {Name,Email} from '../details/profileDetaileOfCurrentUser';



// import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

    const navigation=useNavigation()

    const paperTheme = useTheme();

    const name=Name
    const email = Email
   


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
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://picsum.photos/700'
                                }}
                                size={70}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>{name}</Title>
                                <Caption numberOfLines={3} style={styles.caption}>{email}</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Bookmarks"
                            onPress={() => { props.navigation.navigate('BookmarkScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Ionicons
                                    name="settings-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate('SettingsScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => { props.navigation.navigate('SupportScreen') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Sign Out"
                            onPress={() => { handleSignOut() }}
                        />
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 10,

    },
    title: {
        top: 5,
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
        width: 180

    },
    caption: {
        top: 5,
        fontSize: 13,
        lineHeight: 14,
        fontWeight: '400',
        width: 180

    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
