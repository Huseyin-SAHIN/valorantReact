import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useGlobalContext } from '../Context/GlobalContext';

function FilteredComponent() {

    const { themeMode } = useGlobalContext();

    return (
        <Container>
            <Row>
                <Col className="d-flex align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
                    <div className="p-4 rounded"
                        style={{ background: themeMode.color, color: themeMode.background }}>
                        <h3 className="text-center mb-3">Sonuç Yok</h3>
                        <p className="text-center">Aradığınız kriterlere uyan bir sonuç bulunamadı.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default FilteredComponent;
