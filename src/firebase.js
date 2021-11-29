import firebase from "firebase/compat/app";
import "firebase/compat/database";


const firebaseConfig = {
  apiKey: "AIzaSyDEBNzqQC_-7b4xM95FZkE4Z7sDoPLV8ZY",
  authDomain: "react-c1d19.firebaseapp.com",
  projectId: "react-c1d19",
  storageBucket: "react-c1d19.appspot.com",
  messagingSenderId: "1063318047938",
  appId: "1:1063318047938:web:301ce4ab4faecaba2e7f5b"
};

const fireDb=firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();