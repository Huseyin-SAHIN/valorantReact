import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Style/main.css'
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';



function ExamineSpray() {
  const { uuid } = useParams();
  const [playingCards, setPlayingCards] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { themeMode } = useGlobalContext();


  useEffect(() => {
    fetchSelectedPlayingcard()
  }, [])

  const fetchSelectedPlayingcard = async () => {
    try {
      const response = await axios.get(`https://valorant-api.com/v1/sprays/${uuid}?language=tr-TR`)
      setPlayingCards(response.data.data);
      setIsLoading(false)
    }
    catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const levelsStyle = {
    fontSize: "5vh",
    position: "absolute",
    bottom: "15%",
    right: "15%",
    background: themeMode.color,
    color: themeMode.background,
    padding: "1rem",
    borderRadius: "50%",
    width: "15vh",
    height: "15vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    opacity: "0.8",
  }

  return (
    <div id='ExaminePlayingcard'
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
            padding: "2rem",
            position: "relative",
          }}>
            <Card.Title className='mb-5 text-xl' style={{
              color: themeMode.color,
            }}>
              {playingCards.displayName}
            </Card.Title>
            <Card.Subtitle style={levelsStyle}>
              {playingCards.levels[0].sprayLevel}
              <p style={{ fontSize: "1rem" }}>level</p>
            </Card.Subtitle>
            <Card.Img style={{ height: "80vh", objectFit: "contain" }} src={playingCards.fullTransparentIcon} alt={playingCards.displayName} />
          </Card>
        )}
      </div>
    </div>
  )
}

export default ExamineSpray;