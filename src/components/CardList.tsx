import { QuerySnapshot, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { ref } from "firebase/storage";
import { getCards } from '../services/CardService'
import { CardInfo } from "../models/CardInfo";
import Card from "./Card";

// #ed7979 primary
// #FFC3C4 secondary

type CardListProps = {
    cardList:CardInfo[];
  }


export default function CardList(props:CardListProps)  {

    return (

        <section id="card-list">
            <hr />
            <Grid container spacing={2} justifyContent="center">
                {props.cardList?.map((card) =>
                    <Card key = {card.id} cardInfo={card}/>
                )}
            </Grid>
        </section>
    )
}