import { Container, Row, Col, NavLink } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          <Col md={6}>
            <h4>Ultime Novità</h4>
            <ul className="list-unstyled">
              <li>
                <NavLink to="#" className="text-light">
                  Nuovi Arrivi
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-light">
                  Bestseller
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="text-light">
                  Offerte Speciali
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={6}>
            <h4>Contattaci</h4>
            <address>
              <p>
                <strong>Libreria LibriPiù</strong>
                <br />
                Via dei Libri, 123
                <br />
                00123 Città dei Libri
              </p>
              <p>
                Email:{" "}
                <a href="mailto:info@libripiu.it" className="text-light">
                  info@libripiu.it
                </a>
                <br />
                Telefono: +39 012 345 6789
              </p>
            </address>
          </Col>
        </Row>
      </Container>
      <div className="bg-secondary py-2">
        <Container>
          <Row>
            <Col md={12} className="text-center">
              <p className="mb-0">&copy; 2023 Libreria LibriPiù. Tutti i diritti riservati.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default MyFooter;
