import React from 'react';
import { useDispatch } from 'react-redux';
import { setTasks } from '../redux/actions/tasks';
import { setUserId } from '../redux/actions/firebase';
import { setFirestore } from '../redux/actions/firebase';
import firebase from 'firebase';

function LoginLogic({ user, firestore, auth }) {
  const dispatch = useDispatch();

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
