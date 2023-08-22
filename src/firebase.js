
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVJf9UtqRUfCGHz31CDGWq6lXz7OXIpkU",
  authDomain: "mitiendademotos.firebaseapp.com",
  projectId: "mitiendademotos",
  storageBucket: "mitiendademotos.appspot.com",
  messagingSenderId: "539172018728",
  appId: "1:539172018728:web:8416d3bbba96f54e4e331d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)