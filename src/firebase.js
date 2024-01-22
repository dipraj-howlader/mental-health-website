// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-GwYYL6OmcVtvnis68EtCSlJMVePrxAs",
    authDomain: "mental-health-assurance.firebaseapp.com",
    projectId: "mental-health-assurance",
    storageBucket: "mental-health-assurance.appspot.com",
    messagingSenderId: "89700372110",
    appId: "1:89700372110:web:4ed79eebd6397e56c083df"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export { auth };
