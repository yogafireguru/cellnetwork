import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage"; 


const config = {
    apiKey: "xxxxxxx",
    authDomain: "xxx-xxx.firebaseapp.com",
    databaseURL: "https://xxx-e0d04.firebaseio.com",
    projectId: "xxx-xxx",
    storageBucket: "xx-x.appspot.com",
    messagingSenderId:  "xxxx",
    appId: "1:xxx:web:xxxxx",
    measurementId: "x-xxxx"
  };

  // Initialize Firebase
  firebase.initializeApp(config);
  //firebase.analytics();

  export default firebase;