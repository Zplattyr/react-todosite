import React from 'react';
import firebase from 'firebase';

function LoginLogic({ user, firestore, auth }) {
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
  };

  const out = async () => {
    await auth.signOut();
  };

  if (user) {
    return (
      <div className="login">
        <p>{user.displayName},</p>
        <button onClick={out} className="login_button">
          Выйти
        </button>
      </div>
    );
  } else {
    return (
      <div className="login">
        <button onClick={login} className="login_button">
          Войти
        </button>
      </div>
    );
  }
}

export default LoginLogic;
