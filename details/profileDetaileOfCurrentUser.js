import { useFocusEffect } from '@react-navigation/native';
import { onValue, ref } from 'firebase/database';
import React, { useState } from 'react'

import { db, auth } from '../firebase';



let Name;
let Email ;
let Mobile ;
let Address;


function user() {
    auth.onAuthStateChanged((user) => {

        if (user) {


            const reference = ref(db, 'users/' + auth.currentUser.uid);
           
            onValue(reference, (snapshot) => {
                Name = snapshot.val().FirstName + " " + snapshot.val().LasteName;
                Email = snapshot.val().Email;
                Mobile = snapshot.val().Mobile;
                Address = snapshot.val().Address;




            })
        }
        else{
            Name='';
            Email='';
            Mobile='';
            Address='';

        }
    });


}


user()

export { Name, Email, Mobile, Address };
