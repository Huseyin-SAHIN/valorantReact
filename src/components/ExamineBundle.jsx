import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Style/main.css'
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';



function ExamineBundle() {

    const { uuid } = useParams();
    const [bundles, setBundles] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const { themeMode } = useGlobalContext();


    useEffect(() => {
        fetchSelectedBundle()
    }, [])

    const fetchSelectedBundle = async () => {
        try {
            const response = await axios.get(`https://valorant-api.com/v1/bundles/${uuid}?language=tr-TR`)
            setBundles(response.data.data);
            setIsLoading(false)
        }
        catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }

    return (
        <div id='examineBundle'
            style={{
                minHeight: "90vh",
                background: themeMode.background,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <div className="container" style={{ width: "100%", margin: "auto" }}>
                {isLoading ? <Loading /> : (
                    <Card className='' style={{
                        background: "transparent",
                        width: "100%",
                        border: "none",
                        padding: "2rem"
                    }}>
                        <Card.Title className='mb-5 text-xl' style={{
                            color: themeMode.color,
                        }}>{bundles.displayName}</Card.Title>
                        <Card.Img src={bundles.displayIcon} alt={bundles.displayName} />
                    </Card>
                )}
            </div>
        </div>
    )
}

export default ExamineBundle;