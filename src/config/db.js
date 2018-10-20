import VueFire from 'vuefire'
import firebase from 'firebase'
import Vue from 'vue'

Vue.use(VueFire)

let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };

let init = firebase.initializeApp(config);
export const db = init.database()

export const itemsRef = db.ref('items')