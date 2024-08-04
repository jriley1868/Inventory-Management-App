// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbSZSCsGj7f63qmN4mxeOZIaImsdacM_A",
    authDomain: "inventory-afcb5.firebaseapp.com",
    projectId: "inventory-afcb5",
    storageBucket: "inventory-afcb5.appspot.com",
    messagingSenderId: "536102212538",
    appId: "1:536102212538:web:284bee8655af5a24c34383",
    measurementId: "G-0599F3ZYKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getAnalytics(app);
export { firestore };