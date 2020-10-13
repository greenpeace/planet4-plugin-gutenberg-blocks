const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const devConfig = {
  apiKey: "AIzaSyCVLUCAl9AkfH7f9nQ-ch4UXTpxAsH2U5w",
  authDomain: "greenpeace-testing.firebaseapp.com",
  databaseURL: "https://greenpeace-testing.firebaseio.com",
  projectId: "greenpeace-testing",
  storageBucket: "greenpeace-testing.appspot.com",
  messagingSenderId: "581079260333",
  appId: "1:581079260333:web:ea53ca43329586c6627a24",
  measurementId: "G-CMY17KM3ZW"
};

firebase.initializeApp(devConfig);
firebase.analytics();

export default firebase;