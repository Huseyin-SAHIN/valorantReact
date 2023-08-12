import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function Maps() {
    const [maps, setMaps] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchMaps();
    }, []);

    const fetchMaps = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/maps');
            setMaps(response.data.data);
            setIsLoading(false);
            console.log(response);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };


    return (
        <div id="maps">
            <div className='container'>
                <div className="row">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        maps.map((map, index) => (
                            <div
                                key={index}
                                className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3'>
                                <Card>
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
