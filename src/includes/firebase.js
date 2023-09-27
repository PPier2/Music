import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDZYJiw0XZZRRUQ5sMF0x9VpqBATi17ozE',
  authDomain: 'music-f7998.firebaseapp.com',
  projectId: 'music-f7998',
  storageBucket: 'music-f7998.appspot.com',
  appId: '1:35753381912:web:23330fc1ecae356156736d'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

const usersCollection = db.collection('users')
const songsCollection = db.collection('songs')

export { auth, db, usersCollection, songsCollection, storage }
