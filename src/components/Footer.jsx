import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container>
        <Row>
          <Col md={6}>
            <h3>İletişim Bilgileri</h3>
            <p>Adres: Örnek Adres, Şehir, Ülke</p>
            <p>Email: info@example.com</p>
            <p>Telefon: +1234567890</p>
          </Col>
          <Col md={6}>
            <h3>Hızlı Bağlantılar</h3>
            <ul className="list-unstyled">
              <li><a href="#">Anasayfa</a></li>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#">Hizmetler</a></li>
              <li><a href="#">İletişim</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
