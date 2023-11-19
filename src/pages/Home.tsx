import { useEffect, useRef, useState } from "react";
import AddNewCard from "../components/AddNewCard";
import CardList from "../components/CardList"
import { CardInfo } from "../models/CardInfo";
import { getCards } from "../services/CardService";



export default function Home() {

    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState<CardInfo[]>([]);
    const fetchData = async () => {
        // setLoading(true);
        const cardList = await getCards();
        // setLoading(false);
        setCards(cardList);

        return cardList;
    }

    const addCardToList = (newCardInfo: CardInfo) => {

        setCards([newCardInfo, ...cards]);
    }


    // useEffect(() => {
    //     fetchData();
    // }, [])

    return (
        <>
            <AddNewCard onSubmitNewCard={ addCardToList} />
            <CardList cardList={cards} />
        </>
    )
}