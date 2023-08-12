import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';
import FilteredComponent from './FilteredComponent';

function playingCards() {
    const [playingCards, setPlayingCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCards, setFilteredCards] = useState([]);
    const { themeMode } = useGlobalContext();

    useEffect(() => {
        const dataStorage = JSON.parse(localStorage.getItem('playingCards'))
        if (dataStorage && ((new Date() - new Date(dataStorage.timestamp)) / 1000) < 60) {
            setPlayingCards(dataStorage.playingCards);
            setFilteredCards(dataStorage.playingCards)
            setIsLoading(false);
        } else {
            fetchPlayingCards();
        }
    }, []);

    const fetchPlayingCards = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/playercards?language=tr-TR&isPlayableCharacter=true');

            setPlayingCards(response.data.data);
            setFilteredCards(response.data.data);
            setIsLoading(false);
            const dataStorage = {
                playingCards: response.data.data,
                timestamp: new Date()
            }

            localStorage.setItem('playingCards', JSON.stringify(dataStorage));

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = playingCards.filter(card =>
            card.displayName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    return (
        <div id="playingCards" style={{
            background: themeMode.background
        }}>
            <div className='container'>
                <div className='row' >
                    <input
                        className='search col-6 mt-4 m-auto'
                        type="text"
                        placeholder='Oyun Kartı Arama'
                        value={searchQuery}
                        onChange={event => handleSearch(event.target.value)}
                    />
                </div>
                <div className="row">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        filteredCards.length !== 0 ? (
                            filteredCards.map((card, index) => (

                                <Link
                                    to={'/playingcards/' + card.uuid}
                                    key={index}
                                    className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3 sh '
                                >
                                    <Card style={{
                                        background: themeMode.color,
                                        color: themeMode.background
                                    }}>
                                        <Card.Img variant="top" src={card.displayIcon} />
                                        <Card.Body>
                                            <Card.Title>{card.displayName}</Card.Title>
                                            <Button variant="primary">İncele</Button>
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

export default playingCards;
