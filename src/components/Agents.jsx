import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { useGlobalContext } from '../Context/GlobalContext';

function Agents() {
    const [agents, setAgents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAgents, setFilteredAgents] = useState([]);
    const { themeMode } = useGlobalContext();

    useEffect(() => {
        const dataStorage = JSON.parse(localStorage.getItem('agents'))
        if (dataStorage && ((new Date() - new Date(dataStorage.timestamp)) / 1000) < 60) {
            setAgents(dataStorage.agents);
            setFilteredAgents(dataStorage.agents)
            setIsLoading(false);
        } else {
            fetchAgents();
        }
    }, []);

    const fetchAgents = async () => {
        try {
            const response = await axios.get('https://valorant-api.com/v1/agents?language=tr-TR&isPlayableCharacter=true');
            setAgents(response.data.data);
            setFilteredAgents(response.data.data);
            setIsLoading(false);
            const dataStorage = {
                agents: response.data.data,
                timestamp: new Date()
            }

            localStorage.setItem('agents', JSON.stringify(dataStorage));

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = agents.filter(agent =>
            agent.displayName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredAgents(filtered);
    };

    return (
        <div id="agents" style={{
            background: themeMode.background
        }}>
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
                    {isLoading ? (
                        <Loading />
                    ) : (
                        filteredAgents.length !== 0 ? (
                            filteredAgents.map((agent, index) => (

                                <Link
                                    to={'/agents/' + agent.uuid}
                                    key={index}
                                    className='col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3 mb-3 sh '
                                >
                                    <Card style={{
                                        background: themeMode.color,
                                        color: themeMode.background
                                    }}>
                                        <Card.Img variant="top" src={agent.displayIcon} />
                                        <Card.Body>
                                            <Card.Title>{agent.displayName}</Card.Title>
                                            <Card.Text>{agent.description}</Card.Text>
                                            <Button variant="primary">İncele</Button>
                                        </Card.Body>
                                    </Card>
                                </Link>
                            ))
                        ) : (
                            <div>Şu anda hiç karakter yok...</div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default Agents;
