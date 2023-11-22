import { useState, useEffect } from "react";
import AddNewCard from "../components/AddNewCard";
import CardList from "../components/CardList"
import { CardInfo } from "../models/CardInfo";
import { getCards } from "../services/CardService";

export default function Home() {

    const [cards, setCards] = useState<CardInfo[]>([]);
    const fetchData = async () => {
        const cardList = await getCards();
        setCards(cardList);
        return cardList;
    }

    const addCardToList = (newCardInfo: CardInfo) => {
        setCards([newCardInfo, ...cards]);
    }

    useEffect(
        () => {
            fetchData();
        }
        ,[])

    return (
        <>
            <AddNewCard onSubmitNewCard={ addCardToList} />
            <hr style={{margin:"3rem 0"}}/>
            <CardList cardList={cards} />
        </>
    )
}