import { Card, CardMedia, CardActions, ThemeProvider, createTheme, Button, Grid, Typography } from '@mui/material/';
import SendIcon from '@mui/icons-material/Send';
import CardDescription from './CardDescription';
import CardTitle from './CardTitle';
import { CardInfo } from '../models/CardInfo';

type CardProps = {
  cardInfo:CardInfo;
}


export default function (props:CardProps) {
  return (
    <>
      <Grid item xs={12} sm={8} md={6} lg={4} xl={4} style={{ maxHeight: "100%" }}>
        <div className='card'>
          <Card className='card' >
            <div className="card-text-area">
              <div className="card-title">
                <Typography gutterBottom variant="h5" component="h3">{props.cardInfo.title}</Typography>
              </div>
              <div className="card-description">
                <Typography gutterBottom variant="subtitle1" component="p">{props.cardInfo.description}</Typography>
              </div>
            </div>
            <div className="card-bottom-area">
              <div className="card-img">
                <CardMedia object-fit="cover" component="img" style={{ height: "100%" }}
                  image={props.cardInfo.imageUrl}
                  alt={props.cardInfo.title} title="" />
              </div>
              <div className="card-btn">

              </div>
            </div>
          </Card>
        </div>
      </Grid>
    </>
  )
}