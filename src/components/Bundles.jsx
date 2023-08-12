import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';
import FilteredComponent from './FilteredComponent';

function Bundles() {
    const [bundles, setBundles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredBundles, setfilteredBundles] = useState([]);
    const { themeMode } = useGlobalContext();

    useEffect(() => {
        const dataStorage = JSON.parse(localStorage.getItem('bundles'))
        if (dataStorage && ((new Date() - new Date(dataStorage.timestamp)) / 1000) < 60) {
            setBundles(dataStorage.bundles);
            setfilteredBundles(dataStorage.bundles)
            setIsLoading(false);
        } else {
            fetchBundles();
        }
    }, []);

    const fetchBundles = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/bundles?language=tr-TR&isPlayableCharacter=true');
            setBundles(response.data.data);
            setfilteredBundles(response.data.data);
            setIsLoading(false);
            const dataStorage = {
                bundles: response.data.data,
                timestamp: new Date()
            }

            localStorage.setItem('bundles', JSON.stringify(dataStorage));

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = bundles.filter(bundle =>
            bundle.displayName.toLowerCase().includes(query.toLowerCase())
        );
        setfilteredBundles(filtered);
    };

    return (
        <div id="bundles" style={{
            background: themeMode.background
        }}>
            <div className='container'>
                <div className='row' >
                    <input
                        className='search col-6 mt-4 m-auto'
                        type="text"
                        placeholder='Paket Arama'
                        value={searchQuery}
                        onChange={event => handleSearch(event.target.value)}
                    />
                </div>
                <div className="row">
                    {isLoading ? (
                        <Loading />
                    ) : (
                        filteredBundles.length !== 0 ? (
                            filteredBundles.map((bundle, index) => (

                                <Link
                                    to={'/bundles/' + bundle.uuid}
                                    key={index}
                                    className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3 sh '
                                >
                                    <Card style={{
                                        background: themeMode.color,
                                        color: themeMode.background
                                    }}>
                                        <Card.Img variant="top" src={bundle.verticalPromoImage} />
                                        <Card.Body>
                                            <Card.Title>{bundle.displayName}</Card.Title>
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

export default Bundles;
