import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDr50YiqHVRr1oSMrcfEfWRFIQvgfz2sT4",
    authDomain: "carbon-carpool.firebaseapp.com",
    databaseURL: "https://carbon-carpool.firebaseio.com",
    projectId: "carbon-carpool",
    storageBucket: "carbon-carpool.appspot.com",
    messagingSenderId: "20908493899",
    appId: "1:20908493899:web:4b2ddebfdf2dae46ee51ce"
  };

  // Initialize Firebase
  firebase.initializeApp(config);

  export default firebase;