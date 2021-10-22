import React from 'react';
import '../css/footer.css';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {

    return (
        <Container fluid className="footer">
            <Row className="firstSection">
                <Col className="sections">
                    <span>Acerca de Nosotros</span>
                    <a href="youtube.com" className="links">Quienes somos</a>
                    <a href="youtube.com" className="links">Trabaja para Nosotros</a>
                </Col>
                <Col className="sections">
                    <span>Redes Sociales</span>
                    <a href="youtube.com" className="links">LinkedIn</a>
                    <a href="youtube.com" className="links">Youtube</a>
                    <a href="youtube.com" className="links">Twitter</a>
                    <a href="youtube.com" className="links">Reddit</a>
                </Col>
                <Col className="sections">
                    <span>Ayuda</span>
                    <a href="youtube.com" className="links">Comprar</a>
                    <a href="youtube.com" className="links">Vender</a>
                    <a href="youtube.com" className="links">Resolucion de problemas</a>
                </Col>
            </Row>
            <Row className="copyright">
                <Col>© 1996-2021, twolies.com, Inc. o afiliados. Todos los derechos reservados.</Col>
                <Col>Condiciones de uso</Col>
                <Col>Aviso de privacidad</Col>
            </Row>
        </Container>
    )

};

export default Footer;