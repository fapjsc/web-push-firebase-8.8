import firebase from 'firebase/app';
import 'firebase/messaging';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDNrZhATvtisIkhhN8X5tfxEf0umrq98gE',
  authDomain: 'web-push-2f66d.firebaseapp.com',
  projectId: 'web-push-2f66d',
  storageBucket: 'web-push-2f66d.appspot.com',
  messagingSenderId: '802105019569',
  appId: '1:802105019569:web:ec9037b7f31a8b2143e690',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// const { REACT_APP_VAPID_KEY } = process.env;
const publicKey =
  'BMnL09T9ZnPU6QYORfcsfxiOWsBcdhrFBa4mEFuW4sG32GT2mqIfdW70lvEMYWML6Gr0NGPRo-49z7mRkJhdDN4';

export const getToken = async setTokenFound => {
  let currentToken = '';

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token. ', error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise(resolve => {
    messaging.onMessage(payload => {
      resolve(payload);
    });
  });
