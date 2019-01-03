import "@firebase/app";
import "@firebase/firestore";
import "@firebase/auth";
import "@firebase/storage";
import firebase from "@firebase/app";

const config: any = {
    apiKey: "AIzaSyBfFcqwOIkAQqBQQWnaGS36GSIAqOEmGEc",
    authDomain: "personal-website-41e27.firebaseapp.com",
    databaseURL: "https://personal-website-41e27.firebaseio.com",
    projectId: "personal-website-41e27",
    storageBucket: "personal-website-41e27.appspot.com",
    messagingSenderId: "109316598853"
};

export default firebase.initializeApp(config, { name: "personal website" });