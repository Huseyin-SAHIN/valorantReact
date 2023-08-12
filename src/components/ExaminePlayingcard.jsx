import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Style/main.css'
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';



function ExaminePlayingcards() {

    const { uuid } = useParams();
    const [playingCards, setPlayingCards] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { themeMode } = useGlobalContext();


    useEffect(() => {
        fetchSelectedPlayingCard()
    }, [])

    const fetchSelectedPlayingCard = async () => {
        try {
            const response = await axios.get(`https://valorant-api.com/v1/playercards/${uuid}?language=tr-TR`)
            setPlayingCards(response.data.data);
            setIsLoading(false)
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <div id='ExaminePlayingcards'
            style={{
                minHeight: "90vh",
                background: themeMode.background,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div className="container" style={{ margin: "auto" }}>
                {isLoading ? <Loading /> : (
                    <Card className='' style={{
                        background: "transparent",
                        border: "none",
                        padding: "2rem"
                    }}>
                        <Card.Title className='mb-5 text-xl' style={{
                            color: themeMode.color,
                        }}>
                            {playingCards.displayName}
                        </Card.Title>
                        <Card.Img style={{ height: "80vh", objectFit: "contain" }} src={playingCards.largeArt} alt={playingCards.displayName} />
                    </Card>
                )}
            </div>
        </div>
    )
}

export default ExaminePlayingcards