import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';
import FilteredComponent from './FilteredComponent';

function sprays() {
    const [sprays, setSprays] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredSprays, setfilteredSprays] = useState([]);
    const { themeMode } = useGlobalContext();

    useEffect(() => {
        const dataStorage = JSON.parse(localStorage.getItem('sprays'))
        if (dataStorage && ((new Date() - new Date(dataStorage.timestamp)) / 1000) < 60) {
            setSprays(dataStorage.sprays);
            setfilteredSprays(dataStorage.sprays)
            setIsLoading(false);
        } else {
            fetchSprays();
        }
    }, []);

    const fetchSprays = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/sprays?language=tr-TR&isPlayableCharacter=true');
            setSprays(response.data.data);
            setfilteredSprays(response.data.data);
            setIsLoading(false);
            const dataStorage = {
                sprays: response.data.data,
                timestamp: new Date()
            }

            localStorage.setItem('sprays', JSON.stringify(dataStorage));

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = sprays.filter(spray =>
            spray.displayName.toLowerCase().includes(query.toLowerCase())
        );
        setfilteredSprays(filtered);
    };

    return (
        <div id="sprays" style={{
            background: themeMode.background
        }}>
            <div className='container'>
                <div className='row' >
                    <input
                        className='search col-6 mt-4 m-auto'
                        type="text"
                        placeholder='Sprey Arama'
                        value={searchQuery}
                        onChange={event => handleSearch(event.target.value)}
                    />
                </div>
                <div className="row">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        filteredSprays.length !== 0 ? (
                            filteredSprays.map((spray, index) => (

                                <Link
                                    to={'/sprays/' + spray.uuid}
                                    key={index}
                                    className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3 sh '
                                >
                                    <Card style={{
                                        background: themeMode.color,
                                        color: themeMode.background
                                    }}>
                                        <Card.Img variant="top" src={spray.fullTransparentIcon} />
                                        <Card.Body>
                                            <Card.Title>{spray.displayName}</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            ))
                        ) : (
                            <FilteredComponent />
                        )
                    )}
                </div>
            </div>
            
        </div>
    );
}

export default sprays;
