import { QuerySnapshot, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../firebase";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from "react";
import { ref } from "firebase/storage";
import { getCards } from '../services/CardService';
import { CardInfo } from "../models/CardInfo";
import Card from "./Card";
import { ThemeProvider } from "@emotion/react";
import { CardMedia, Container, Card as MaterialCard, createTheme } from '@mui/material';

// #ed7979 primary
// rgb(240, 147, 147) light primary
// rgb(165, 84, 84) dark primary

// background

// #121212 bg
// #181818 card
type CardListProps = {
    cardList: CardInfo[];
}

export default function CardList(props: CardListProps) {

    return (
        <section id="card-list">
            <Container>
                <Grid container spacing={2} justifyContent="space-between">
                    {props.cardList?.map((card) =>
                        <Card key={card.id} cardInfo={card} />
                    )}
                </Grid>
            </Container>
        </section>
    )
}