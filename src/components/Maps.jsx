import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';

function Maps() {
    const [maps, setMaps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { themeMode } = useGlobalContext();

    useEffect(() => {
        const dataStorage = JSON.parse(localStorage.getItem('maps'))
        if (dataStorage && ((new Date() - new Date(dataStorage.timestamp)) / 1000) < 60) {
            setMaps(dataStorage.maps);
            setIsLoading(false);
        } else {
            fetchMaps();
        }
    }, []);

    const fetchMaps = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/maps');
            setMaps(response.data.data);
            setIsLoading(false);

            const dataStorage = {
                maps: response.data.data,
                timestamp: new Date()
            }

            localStorage.setItem('maps', JSON.stringify(dataStorage));

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };


    return (
        <div id="maps" style={{
            background: themeMode.background
        }}>
            <div className='container'>
                <div className="row">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        maps.map((map, index) => (
                            <div
                                key={index}
                                className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3'>
                                <Card style={{ background: themeMode.color, color: themeMode.background }}>
                                    <Card.Img variant="top" src={map.displayIcon} />
                                    <Card.Img className='splash' variant="top" src={map.splash} />
                                    <Card.Body>
                                        <Card.Title>{map.displayName}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Maps;
