import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAqLaQjYOhCi0AFtQkPraa7LJiFnC9rOqE",
  authDomain: "ninja-smoothies-cf225.firebaseapp.com",
  databaseURL: "https://ninja-smoothies-cf225.firebaseio.com",
  projectId: "ninja-smoothies-cf225",
  storageBucket: "ninja-smoothies-cf225.appspot.com",
  messagingSenderId: "864539899597",
  appId: "1:864539899597:web:6fbc9dfe95d35d73d61b84"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()