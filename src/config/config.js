import firebase from 'firebase'

// Edit your firebase config here
let config = {
    apiKey: "AIzaSyDa6U0eeNH5J9_8Mkp_Vs50s9mGofG14Tw",
    authDomain: "vue-firebase-tutorial-cc28e.firebaseapp.com",
    databaseURL: "https://vue-firebase-tutorial-cc28e.firebaseio.com",
    projectId: "vue-firebase-tutorial-cc28e",
    storageBucket: "vue-firebase-tutorial-cc28e.appspot.com",
    messagingSenderId: "266264128559"
  };

export const init = firebase.initializeApp(config);