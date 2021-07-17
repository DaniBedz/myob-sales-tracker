import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import React, { useEffect } from 'react';
import { navigate } from 'raviger';

import Logo from '../Logo/Logo';

import styles from './loginButton.module.css';
import googleImg from './google.png';

const app = initializeApp({
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
});

const provider = new GoogleAuthProvider();
const auth = getAuth();

function openGoogleAuth() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            localStorage.setItem('credential', JSON.stringify(credential));
            const token = credential.accessToken;
            localStorage.setItem('token', token);
            // The signed-in user info.
            const { user } = result;
            localStorage.setItem('user', JSON.stringify(user));

            navigate('/dashboard');
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
            navigate('/login');
        });
}

function LoginPage() {
    useEffect(() => {
        if (localStorage.getItem('credential')) navigate('/dashboard');
    }, []);

    return (
        <div className={styles.loginWrapperStyles}>
            <div className={styles.loginForm}>
                <Logo />
                <button
                    type="submit"
                    className={styles.loginButton}
                    onClick={() => openGoogleAuth()}
                >
                    Login with Google
                    <img src={googleImg} className={styles.loginIcon} alt="google icon" />
                </button>
            </div>
        </div>
    );
}

export default LoginPage;
