// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'blognext-17a51.firebaseapp.com',
  projectId: 'blognext-17a51',
  storageBucket: 'blognext-17a51.appspot.com',
  messagingSenderId: '95609741451',
  appId: '1:95609741451:web:4501252e474d15a5c1b48e',
  measurementId: 'G-DQ3X125XDB',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
