import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
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
              <li><a className="text-white text-decoration-none" href="#">Anasayfa</a></li>
              <li><a className="text-white text-decoration-none" href="#">Hakkımızda</a></li>
              <li><a className="text-white text-decoration-none" href="#">Hizmetler</a></li>
              <li><a className="text-white text-decoration-none" href="#">İletişim</a></li>
            </ul>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col md={12} className="text-center">
            <p className="text-white">
              Tüm hakları saklıdır &copy; {new Date().getFullYear()}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
