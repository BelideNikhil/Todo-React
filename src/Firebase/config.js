import firebase from 'firebase/app';
import 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyAZOm1YxpcqtdSyUO3XkxrRns6mcfrJw3Q",
    authDomain: "my-todo-s-2937f.firebaseapp.com",
    projectId: "my-todo-s-2937f",
    storageBucket: "my-todo-s-2937f.appspot.com",
    messagingSenderId: "160762280793",
    appId: "1:160762280793:web:c6dd9bd9aa25ce36a92a48"
};

firebase.initializeApp(firebaseConfig)

const todoDB=firebase.firestore()
export {todoDB}