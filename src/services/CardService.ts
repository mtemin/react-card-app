import { DocumentData, QuerySnapshot, collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { CardInfo } from "../models/CardInfo";


export async function getCards():Promise<CardInfo[]>{

  const querySnapshot:QuerySnapshot<DocumentData, DocumentData> = await getDocs(collection(db, "cards"));

  return querySnapshot.docs.map((doc) => {
    return doc.data() as CardInfo ;
      
  });
};