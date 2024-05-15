import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

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
const getAnalytics = getAnalytics(app);
const db = getFirestore(app);

export { db };