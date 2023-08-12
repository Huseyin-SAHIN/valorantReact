import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';

function Weapons() {
    const [weapons, setWeapons] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredWeapons, setFilteredWeapons] = useState([]);

    useEffect(() => {
        fetchWeapons();
    }, []);

    const fetchWeapons = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/weapons/skinchromas?language=tr-TR');
            setWeapons(response.data.data);
            setFilteredWeapons(response.data.data);
            setIsLoading(false);
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
        <div id="weapons">
            <div className='container'>
                <div className='row' >
                    <input
                        className='search col-6 mt-4 m-auto'
                        type="text"
                        placeholder='Ajan Arama'
                        value={searchQuery}
                        onChange={event => handleSearch(event.target.value)}
                    />
                </div>
                <div className="row">
                    {isLoading ? (<Loading />) : (
                        filteredWeapons.map((weapon, index) => (

                            <Link
                                to={'/weapons/' + weapon.uuid}
                                key={index}
                                className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3'
                            >
                                <Card>
                                    <Card.Img variant="top" src={weapon.displayIcon} />
                                    <Card.Body>
                                        <Card.Title>{weapon.displayName}</Card.Title>
                                        <Card.Text>{weapon.description}</Card.Text>
                                        <Button variant="primary">İncele</Button>
                                    </Card.Body>
                                </Card>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Weapons;
