import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';

const app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

const provider = new GoogleAuthProvider();
const auth = getAuth();

function openGoogleAuth() {
    signInWithPopup(auth, provider)
        .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            localStorage.setItem('credential', credential);
            const token = credential.accessToken;
            localStorage.setItem('token', token);
            // The signed-in user info.
            const { user } = result;
            localStorage.setItem('user', user);

        // ...
        })
        .catch((error) => {
        // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const { email } = error;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        });
}

function LoginPage() {
    return (
        <div>
            <button onClick={() => openGoogleAuth()}>Login Form</button>
        </div>
    );
}

export default LoginPage;
