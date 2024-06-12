import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyClGugLkcn6bk80puyY-hVTBsOH2i5cbTU",
    authDomain: "eventplan-30036.firebaseapp.com",
    projectId: "eventplan-30036",
    storageBucket: "eventplan-30036.appspot.com",
    messagingSenderId: "461554234370",
    appId: "1:461554234370:web:e9d61927005593ed3da31b",
    measurementId: "G-H5YDPYSDGL"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, analytics };