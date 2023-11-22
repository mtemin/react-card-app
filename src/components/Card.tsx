import { Card as MaterialCard, CardMedia, Grid, Typography } from '@mui/material/';
import { CardInfo } from '../models/CardInfo';

type CardProps = {
  cardInfo: CardInfo;
}

export default function Card(props: CardProps) {
  return (
    <>
      <Grid item xs={12} sm={8} md={6} lg={4} xl={4}>
        <MaterialCard
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "650px",
            padding: "0.5rem",
          }}>
          <Typography gutterBottom variant="h5" component="h4"
            sx={{
              color: "#ed7979",
              display: "inline"
            }}>{props.cardInfo.title}</Typography>
          <Typography gutterBottom variant="subtitle1" component="p"
            sx={{
              height: "40%",
              overflowX: "hidden",
              overflowY: "scroll",
              border: "1px solid #4B4B4B",
              borderRadius: "5px",
              padding: "5px"
            }}>{props.cardInfo.description}</Typography>
          <CardMedia object-fit="cover" component="img" style={{ height: "100%" }}
            image={props.cardInfo.imageUrl}
            alt={props.cardInfo.title} title=""
            sx={{
              maxHeight: "60%",
              objectFit: "cover"
            }} />
        </MaterialCard>
      </Grid>
    </>
  )
}