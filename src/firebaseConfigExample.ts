import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage';

//fill below with your firebase project configurations 
const firebaseConfig = {
  apiKey: "*****************************************",
  authDomain: "********************************",
  projectId: "****************",
  storageBucket: "***************************",
  messagingSenderId: "***********",
  appId: "*****************************************"
};

  const cardApp = initializeApp(firebaseConfig);
  
  const db = getFirestore(cardApp);
  
  const storage = getStorage(cardApp);

  export { db, storage};