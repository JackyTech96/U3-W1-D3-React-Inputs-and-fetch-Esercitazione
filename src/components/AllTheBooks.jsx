import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const AllTheBooks = () => (
  <Row>
    {" "}
    <h3 className="text-white display-2 mb-4">Fantasy</h3>
    {fantasy.map((book) => (
      <Col key={book.asin} xs={12} md={4} className="mb-5">
        <Card className="mb-4 h-100 text-white" bg="dark">
          <Card.Img variant="top" src={book.img} className="img-fluid object-fit-cover" style={{ height: "400px" }} />
          <Card.Body bg>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.description} <Badge bg="primary">{book.price}€</Badge>
            </Card.Text>

            <Button variant="success">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
    <h3 className="text-white display-2 mb-4">History</h3>
    {history.map((book) => (
      <Col key={book.asin} lg={2} className="mb-5">
        <Card className="mb-4 h-100 text-white" bg="dark">
          <Card.Img variant="top" src={book.img} className="img-fluid object-fit-cover" style={{ height: "400px" }} />
          <Card.Body bg>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.description} <Badge bg="primary">{book.price}€</Badge>
            </Card.Text>

            <Button variant="success">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
    <h3 className="text-white display-2 mb-4">Horror</h3>
    {horror.map((book) => (
      <Col key={book.asin} lg={2} className="mb-5">
        <Card className="mb-4 h-100 text-white" bg="dark">
          <Card.Img variant="top" src={book.img} className="img-fluid object-fit-cover" style={{ height: "400px" }} />
          <Card.Body bg>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.description} <Badge bg="primary">{book.price}€</Badge>
            </Card.Text>

            <Button variant="success">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
    <h3 className="text-white display-2 mb-4">Romance</h3>
    {romance.map((book) => (
      <Col key={book.asin} lg={2} className="mb-5">
        <Card className="mb-4 h-100 text-white" bg="dark">
          <Card.Img variant="top" src={book.img} className="img-fluid object-fit-cover" style={{ height: "400px" }} />
          <Card.Body bg>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.description} <Badge bg="primary">{book.price}€</Badge>
            </Card.Text>

            <Button variant="success">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
    <h3 className="text-white display-2 mb-4">Scifi</h3>
    {scifi.map((book) => (
      <Col key={book.asin} lg={2} className="mb-5">
        <Card className="mb-4 h-100 text-white" bg="dark">
          <Card.Img variant="top" src={book.img} className="img-fluid object-fit-cover" style={{ height: "400px" }} />
          <Card.Body bg>
            <Card.Title>{book.title}</Card.Title>
            <Card.Text>
              {book.description} <Badge bg="primary">{book.price}€</Badge>
            </Card.Text>

            <Button variant="success">Acquista</Button>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default AllTheBooks;
