// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
// eslint-disable-next-line no-undef
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: 'AIzaSyDNrZhATvtisIkhhN8X5tfxEf0umrq98gE',
  authDomain: 'web-push-2f66d.firebaseapp.com',
  projectId: 'web-push-2f66d',
  storageBucket: 'web-push-2f66d.appspot.com',
  messagingSenderId: '802105019569',
  appId: '1:802105019569:web:ec9037b7f31a8b2143e690',
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// eslint-disable-next-line no-undef
// const messaging = firebase.messaging();

let messaging;

try {
  // Retrieve firebase messaging
  // eslint-disable-next-line no-undef
  messaging = firebase.messaging();
} catch (error) {
  console.log(error);
}

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/logo192.png',
    click_action: 'https://silly-bhabha-5c2613.netlify.app',
  };

  // eslint-disable-next-line no-restricted-globals
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
