import VueFire from 'vuefire'
import firebase from 'firebase'
import Vue from 'vue'

import { init } from './config'

Vue.use(VueFire)

export const db = init.database()
export const itemsRef = db.ref('items')