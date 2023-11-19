import { CardMedia, CardActions } from '@mui/material/';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Card as MaterialCard } from '@mui/material'

import CardDescription from './CardDescription';
import CardTitle from './CardTitle';
import { useEffect, useState } from 'react';

import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

import Swal from 'sweetalert2';
import CardList from './CardList';
import { CardInfo } from '../models/CardInfo';

type AddNewCardProps = {
    onSubmitNewCard: any;
}


export default function AddNewCard(props: AddNewCardProps) {

    let initialTitle = 'New Title';
    let initialDescription = 'New Description';
    let initialImage = '/images/addImage.png';

    let initialCardInfo: CardInfo = {
        id: '',
        title: initialTitle,
        description: initialDescription,
        imageUrl: initialImage
    }

    // let [imageUrl, setImageUrl] = useState(initialImage);
    //let [title, setTitle] = useState(initialTitle);
    //let [description, setDescription] = useState(initialDescription);

    let [cardInfo, setCardInfo] = useState({} as CardInfo);
    const setTitle = (title: string) => {
        setCardInfo({ ...cardInfo, title: title });

    }
    const setDescription = (description: string) => {
        setCardInfo({ ...cardInfo, description: description });
    }

    const handleImage = (event: any) => {
        setCardInfo({ ...cardInfo, imageUrl: URL.createObjectURL(event.target.files[0]) });
        setImageFile(event.target.files[0]);
    }


    let [imageFile, setImageFile] = useState<File | null>(null);

    const uploadImage = async () => {
        if (imageFile) {
            let imageRef = ref(storage, `images/${imageFile.name + uuidv4()}`);
            let snapshot = await uploadBytes(imageRef, imageFile);
            let url = await getDownloadURL(snapshot.ref);
            return url;
        }

        return null;


    }

    const cardActionsStyle = {
        display: "flex",
        justifyContent: "right",
        padding: '10px 0'
    }


    const createNewCard = async (event: any) => {
        event.preventDefault();
        //TODO set loading
        if (!cardInfo.title || !cardInfo.description || !cardInfo.imageUrl) {
            Swal.fire({
                title: "Hata",
                icon: "error",
                text: "Title, description and image fields can not be empty!",
            });
            return;
        }
        const firebaseUrl = await uploadImage();
        if (!firebaseUrl) {
            Swal.fire({
                title: "Hata",
                icon: "error",
                text: "Could not upload image to firebase",
            });
            return;
        }
        const newCardValue = {
            ...cardInfo,
            imageUrl: firebaseUrl
        };
        const docRef = await addDoc(collection(db, "cards"), newCardValue);
        console.log("Document written with ID: ", docRef.id);
        setCardInfo({} as CardInfo);
        
        props.onSubmitNewCard({...newCardValue, id:docRef.id});
    }



    return (
        <section id="insert-card">
            <Grid container spacing={2} justifyContent="center">
                <Grid item style={{ maxHeight: "100%" }} xs={12} sm={8} md={6} lg={4} xl={4} >
                    <div>
                        <MaterialCard className='card'>
                            <div className="card-text-area">
                                <div className="card-title">
                                    <CardTitle title={cardInfo.title ? cardInfo.title : initialCardInfo.title} setTitle={setTitle} />
                                </div>
                                <div className="card-description">
                                    <CardDescription
                                        description={cardInfo.description ? cardInfo.description : initialCardInfo.description}
                                        setDescription={setDescription} />
                                </div>
                            </div>
                            <div className="card-bottom-area">
                                <div className="card-img">
                                    <input type="file" onChange={handleImage} />
                                    <CardMedia
                                        onChange={handleImage}
                                        object-fit="cover"
                                        component="img"
                                        style={{ height: "100%" }}
                                        image={cardInfo.imageUrl ? cardInfo.imageUrl : initialCardInfo.imageUrl}
                                        alt="Upload Image..." title="JSON Statham" />
                                </div>
                                <div className="card-btn">
                                    <CardActions style={cardActionsStyle}>
                                        <Button
                                            variant="contained"
                                            color="success"
                                            startIcon={<SendIcon />}
                                            onClick={createNewCard}>
                                            Submit card</Button>
                                    </CardActions>
                                </div>
                            </div>
                        </MaterialCard>

                    </div>
                </Grid>
            </Grid>
        </section>
    )
}
