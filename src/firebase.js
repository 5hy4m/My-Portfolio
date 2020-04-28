import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBOcAgoDitRxLlhbdXv37vt-f_iW1s9S9I",
  authDomain: "my-portfolio-api-db.firebaseapp.com",
  databaseURL: "https://my-portfolio-api-db.firebaseio.com",
  projectId: "my-portfolio-api-db",
  storageBucket: "my-portfolio-api-db.appspot.com",
  messagingSenderId: "849641430417",
  appId: "1:849641430417:web:ed226f5f4616eaa9d3ce30",
  measurementId: "G-WM6MSCPKX6"
};
  

firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const msgsRef = databaseRef.child("Messages")
export const credRef = databaseRef.child("Credentials")