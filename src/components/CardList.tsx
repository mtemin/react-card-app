import Grid from '@mui/material/Grid';

import { CardInfo } from "../models/CardInfo";
import Card from "./Card";
import { Container, Card as MaterialCard} from '@mui/material';

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