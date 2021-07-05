import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAgTCwZsxkmfctrCaBcV-jw7oJE8qaqyKo",
  authDomain: "chamadas-84cf5.firebaseapp.com",
  projectId: "chamadas-84cf5",
  storageBucket: "chamadas-84cf5.appspot.com",
  messagingSenderId: "603554119102",
  appId: "1:603554119102:web:ccd5e654ace6d344ed0def",
  measurementId: "G-SDQX5P63RL"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;