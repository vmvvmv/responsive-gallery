import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey:'AIzaSyDzaPpFzFYOeCgAb5Bti2QIsbGRtasfV64',
  authDomain:'test-62330.firebaseapp.com',
  databaseURL:'https://test-62330.firebaseio.com',
  projectId:'test-62330',
  storageBucket: 'gs://test-62330.appspot.com',
  messagingSenderId: '950495323455'
});

export  {firebaseApp};

