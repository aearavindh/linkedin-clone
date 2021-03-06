import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD53z6cWq1K_dxWy-thsWNz29fAYL8sDBM",
  authDomain: "linkedin-clone-50776.firebaseapp.com",
  projectId: "linkedin-clone-50776",
  storageBucket: "linkedin-clone-50776.appspot.com",
  messagingSenderId: "778405252786",
  appId: "1:778405252786:web:69de0e53973130f88b83ab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
