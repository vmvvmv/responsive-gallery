import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey:'AIzaSyDzaPpFzFYOeCgAb5Bti2QIsbGRtasfV64',
  authDomain:'test-62330.firebaseapp.com',
  databaseURL:'https://test-62330.firebaseio.com',
  projectId:'test-62330',
  storageBucket: 'gs://test-62330.appspot.com',
  messagingSenderId: '950495323455'
});

const removeImageFromStorage = (itemId) => {
  const itemRef = firebaseApp.database().ref(`/images/${itemId}`);
  itemRef.remove();
}

const addImageToStorage = (filename) => {
  firebaseApp
    .storage()
    .ref('images')
    .child(filename)
    .getDownloadURL()
    .then(url => {
        const itemsRef = firebaseApp.database().ref('images');
        const image = {url}
        itemsRef.push(image);
    })
};

export  {firebaseApp, removeImageFromStorage, addImageToStorage};

