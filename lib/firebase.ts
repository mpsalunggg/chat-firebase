// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyABokqZPZUCXKUMeNGAGa9DRFIdVGzuwRs',
  authDomain: 'realtime-chat-999fa.firebaseapp.com',
  projectId: 'realtime-chat-999fa',
  storageBucket: 'realtime-chat-999fa.appspot.com',
  messagingSenderId: '1063680542940',
  appId: '1:1063680542940:web:30b507bf381b36c89acc19',
  measurementId: 'G-PJX7WNWTZC',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export { auth, firestore, storage, googleProvider }
