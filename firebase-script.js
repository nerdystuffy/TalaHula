// firebase-script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

const firebaseConfig = {
    // PASTE YOUR CONFIG HERE (The one with apiKey, authDomain, etc.)
    apiKey: "AIzaSyBKsGf9_qydnsTxOl1tqEa_cPTExkYCrUY", 
    authDomain: "talahula-4384e.firebaseapp.com",
    projectId: "talahula-4384e",
    storageBucket: "talahula-4384e.firebasestorage.app",
    messagingSenderId: "243686926208",
    appId: "1:243686926208:web:3c52bbf254a5ea0937c365"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };