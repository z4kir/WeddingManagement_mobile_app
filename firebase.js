


import { initializeApp,getApp ,getApps} from 'firebase/app';

// Optionally import the services that you want to use
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyACBkcZYSO0vyV_Nsx8exlDzXeagwBWxl8",
  authDomain: "wedding-management-app-f0c18.firebaseapp.com",
  databaseURL: "https://wedding-management-app-f0c18-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wedding-management-app-f0c18",
  storageBucket: "wedding-management-app-f0c18.appspot.com",
  messagingSenderId: "173115473498",
  appId: "1:173115473498:web:6eb9788aec67c799896263",
  measurementId: "G-MJVE31HRMZ"
};

let app;

if (getApps.length === 0) {
  app = initializeApp(firebaseConfig);
  
} else {
  app =getApp();
  
}


// Authentication

const auth=getAuth();

// Realtime data base

const db=getDatabase();


export {app,auth,db};