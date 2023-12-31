import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';
import FilteredComponent from './FilteredComponent';

function Weapons() {
    const [weapons, setWeapons] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredWeapons, setFilteredWeapons] = useState([]);
    const { themeMode } = useGlobalContext();

    useEffect(() => {
        const dataStorage = JSON.parse(localStorage.getItem('weapons'))
        if (dataStorage && ((new Date() - new Date(dataStorage.timestamp)) / 1000) < 60) {
            setWeapons(dataStorage.weapons);
            setFilteredWeapons(dataStorage.weapons)
            setIsLoading(false);
        } else {
            fetchWeapons();
        }
    }, []);

    const fetchWeapons = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/weapons/skinchromas?language=tr-TR&isPlayableCharacter=true');
            setWeapons(response.data.data);
            setFilteredWeapons(response.data.data);
            setIsLoading(false);
            const dataStorage = {
                weapons: response.data.data,
                timestamp: new Date()
            }
            localStorage.setItem('weapons', JSON.stringify(dataStorage));

        } catch (error) {
            setIsLoading(false)
            console.log(error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = weapons.filter(weapon =>
            weapon.displayName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredWeapons(filtered);
    };

    return (
        <div id="weapons" style={{
            background: themeMode.background
        }}>
            <div className='container'>
                <div className='row' >
                    <input
                        className='search col-6 mt-4 m-auto'
                        type="text"
                        placeholder='Silah Arama'
                        value={searchQuery}
                        onChange={event => handleSearch(event.target.value)}
                    />
                </div>
                <div className="row">
                    {isLoading ? (<Loading />) : (
                        filteredWeapons.length !== 0 ? (
                            filteredWeapons.map((weapon, index) => (

                                <Link
                                    to={'/weapons/' + weapon.uuid}
                                    key={index}
                                    className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3'
                                >
                                    <Card style={{
                                        background: themeMode.color,
                                        color: themeMode.background
                                    }}>
                                        <Card.Img variant="top" src={weapon.displayIcon} />
                                        <Card.Body>
                                            <Card.Title>{weapon.displayName}</Card.Title>
                                            <Card.Text>{weapon.description}</Card.Text>
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

export default Weapons;
