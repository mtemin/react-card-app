import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

//benemin@gmail hesabında
const firebaseConfig = {
  apiKey: "AIzaSyBhfk9lKaON6xUCkZbgA9FGdg2hmHwSJWw",
  authDomain: "depixen-card-app.firebaseapp.com",
  projectId: "depixen-card-app",
  storageBucket: "depixen-card-app.appspot.com",
  messagingSenderId: "597745939166",
  appId: "1:597745939166:web:fa42c2c9e7bf701254884f"
};

  const cardApp = initializeApp(firebaseConfig);
  
  const db = getFirestore(cardApp);
  
  const storage = getStorage(cardApp);

  export { db, storage};