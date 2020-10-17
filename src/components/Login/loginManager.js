import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeFirebase = () =>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
    }
}

// Export handle google button
export const handleGoogleSignIn = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        const {displayName,email,photoURL} = res.user;
        const userInfo = {
             isSignIn: true,
             name: displayName,
             email: email,
             imgUrl: photoURL
        }
        return  userInfo;
      })
      .catch( err =>{
        return err;
      });
}