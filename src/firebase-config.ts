// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAxDKbiZLupQFw3Al1m6gieMCDvmce4lww',
  authDomain: 'users-table-firebase.firebaseapp.com',
  projectId: 'users-table-firebase',
  storageBucket: 'users-table-firebase.appspot.com',
  messagingSenderId: '711431710886',
  appId: '1:711431710886:web:c6722e029cf2b59030ac67',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
