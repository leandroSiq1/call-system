import { useState, useEffect, createContext } from 'react';
import { toast } from 'react-toastify';

import firebase from '../services/firebaseConnection';

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("systemUser");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoading(false);
    }

    loadStorage();
  }, []);

  // login user
  async function signIn(email, password) {
    setLoadingAuth(true);

    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then(async (value) => {
      console.log(value);
      const uid = value.user.uid;

      const userProfile = await firebase.firestore().collection('users')
      .doc(uid).get();

      console.log(userProfile); 

      let data = {
        uid,
        name: userProfile.data().name,
        email,
        avatarUrl: userProfile.data().avatarUrl,
      }

      setUser(data);
      storageUser(data);
      setLoadingAuth(false);
      toast.success('Bem vindo de volta!');

    }).catch(error => {
      console.log("Error: ", error);
      toast.error('Ops algo deu errado!');
      setLoadingAuth(false);
    });
  }


  // register ner user
  async function signUp(name, email, password) {
    setLoadingAuth(true);

    await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        const uid = value.user.uid;
        console.log(value);

        await firebase.firestore().collection('users')
          .doc(uid).set({
            name,
            avatarUrl: null,
          })
          .then(() => {
            let data = {
              uid,
              name,
              email,
              avatarUrl: null,
            }

            setUser(data);
            storageUser(data);
            setLoadingAuth(false);
            toast.success('Bem vindo a plataforma!');
          })
      }).catch(error => {
        console.log("Error: ", error);
        toast.error('Ops algo deu errado!');
        setLoadingAuth(false);
      })

  }

  function storageUser(data) {
    localStorage.setItem("systemUser", JSON.stringify(data));
  }
  
  // logout user
  async function signOut() {
    await firebase.auth().signOut();
    localStorage.removeItem("systemUser");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ 
      signed: !!user, 
      user, 
      loading, 
      signUp,
      signOut,
      signIn,
      loadingAuth,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
