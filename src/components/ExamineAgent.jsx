import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../Style/main.css'
import { Card } from 'react-bootstrap';
import Loading from './Loading';



function ExamineAgent() {

    const { uuid } = useParams();
    const [agentResponse, setAgentResponse] = useState(null)
    const [scrollHeight, setScrollHeight] = useState(0);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchSelectedAgent()
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            setScrollHeight(document.documentElement.scrollTop);
        };


        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollHeight]);

    const fetchSelectedAgent = async () => {
        try {
            const response = await axios.get(`https://valorant-api.com/v1/agents/${uuid}?language=tr-TR`)
            setAgentResponse(response.data.data);
            setIsLoading(false)
            console.log(response.data.data);
        }
        catch (error) {
            setIsLoading(false)
            console.log(error)
        }
    }

    return (
        <div id='examineAgent' style={{
            background: "#333"
        }}>
            {isLoading ? <Loading /> : (
                <>
                    <div className="cardImg" style={{
                        background: `url(${agentResponse.background})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        position: 'relative',
                    }}>
                        <img style={{
                            paddingTop: "2rem",
                            width: `calc(100% - ${scrollHeight}%)`,
                            minWidth: '60%',
                        }}
                            src={agentResponse.bustPortrait} className='img-fluid' />
                    </div>
                    <div className="container" style={{
                        color: "#fff"
                    }}>
                        <div className='cardTitle'>
                            <h3 className='h1'>{agentResponse.displayName}</h3>
                        </div>
                        <div className='display-6'>{agentResponse.description}</div>
                        <div>
                            {
                                <Card className="custom-card mt-5 shadow"
                                    style={{
                                        background: "#222",
                                        color: "#fff",
                                        padding: "1rem 0",
                                    }}
                                >
                                    <Card.Body>
                                        <div className="row">
                                            <div className="icon-container col-sm-12 col-md-4 col-lg-2 mt-3 mb-3">
                                                <img src={agentResponse.role.displayIcon} style={{
                                                    width: "100%",
                                                }} />
                                            </div>
                                            <div className="text-container col-sm-12 col-md-8 col-lg-10 mt-3 mb-3">
                                                <Card.Title>{agentResponse.role.displayName}</Card.Title>
                                                <Card.Text>{agentResponse.role.description}</Card.Text>
                                                {agentResponse.characterTags && (
                                                    <div className='text-white'>
                                                        <u>Özellikler</u>
                                                        {agentResponse.characterTags.map((tag, index) => (
                                                            <div key={index}>{tag}</div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            }
                        </div>
                        <hr />
                        <h3 className=' h1 pt-5'>Yetenekler</h3>
                        <div className='pt-2 pb-5'>
                            {agentResponse.abilities.map((ability, index) => (
                                <Card className="custom-card mb-4 shadow" key={index}
                                    style={{
                                        background: "transparent",
                                        color: "#fff",
                                        padding: "1rem 0",
                                    }}
                                >
                                    <Card.Body>
                                        <div className="row">
                                            <div className="icon-container col-sm-12 col-md-4 col-lg-2 mt-3 mb-3">
                                                <img src={ability.displayIcon} style={{
                                                    width: "100%",
                                                }} />
                                            </div>
                                            <div className="text-container col-sm-12 col-md-8 col-lg-10 mt-3 mb-3">
                                                <Card.Title>{ability.displayName}</Card.Title>
                                                <Card.Text>{ability.description}</Card.Text>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </div>
                </>
            )
            }
        </div >
    )
}

export default ExamineAgent