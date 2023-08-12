import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Style/main.css'



function ExamineAgent() {

    const { uuid } = useParams();
    const [weaponsResponse, setWeaponsResponse] = useState(null)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSelectedAgent()
    }, [])

    const fetchSelectedAgent = async () => {
        try {
            const response = await axios.get(`https://valorant-api.com/v1/weapons/skinchromas/${uuid}?language=tr-TR`)
            setWeaponsResponse(response.data.data);
            console.log(response)
            setIsLoading(false)
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <div id='examineAgent'
            style={{
                minHeight: "90vh",
                background: "#333",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div className="container" style={{ width: "100%", margin: "auto" }}>
                {isLoading ? <div>Loading...</div> : (
                    <Card className='' style={{
                        background: "transparent",
                        width: "100%",
                        border: "none",
                        padding: "2rem"
                    }}>
                        <Card.Title className='text-white mb-5 text-xl'>{weaponsResponse.displayName}</Card.Title>
                        <Card.Img src={weaponsResponse.fullRender} alt={weaponsResponse.displayName} />
                    </Card>
                )}
            </div>
        </div>
    )
}

export default ExamineAgent