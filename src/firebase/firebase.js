import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAsgtma5bdSktQHKUZTDYRrUiZWIKBafts",
    authDomain: "clientesapp-2484d.firebaseapp.com",
    projectId: "clientesapp-2484d",
    storageBucket: "clientesapp-2484d.appspot.com",
    messagingSenderId: "950655070827",
    appId: "1:950655070827:web:53e6a87a0faadc1057772e"
  };

  // var firebaseConfig = {
  //   apiKey: "AIzaSyCnDFNvJOSserY2zZRMy_l1Y_-_9GYB11c",
  //   authDomain: "clientesapp-test.firebaseapp.com",
  //   projectId: "clientesapp-test",
  //   storageBucket: "clientesapp-test.appspot.com",
  //   messagingSenderId: "156824000691",
  //   appId: "1:156824000691:web:618239e4c884826bad78c6"
  // };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();