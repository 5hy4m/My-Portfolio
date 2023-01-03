import * as firebase from 'firebase';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_APP_Id,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  auth: process.env.REACT_APP_UID,
};
const provider = new firebase.auth.GoogleAuthProvider();
const app = firebase.initializeApp(config);
export const adminApp = async () =>
  await new Promise((resolve) =>
    app
      .auth()
      .signInWithPopup(provider)
      .then(() => resolve(app.database().ref().child('Messages')))
  );

const databaseRef = firebase.database().ref();

export const msgsRef = databaseRef.child('Messages');
