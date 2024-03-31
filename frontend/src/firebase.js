import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAukPvHo3G4lnRtkTjTqF5nlIc6hVGaB3c",
  authDomain: "askaro-9ad82.firebaseapp.com",
  projectId: "askaro-9ad82",
  storageBucket: "askaro-9ad82.appspot.com",
  messagingSenderId: "735397066387",
  appId: "1:735397066387:web:0d0d053e7b991becc07f66",
  measurementId: "G-399DGSM9K7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;
