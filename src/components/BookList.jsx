import React, { useState } from "react";
import { Badge, Button, Card, Col, FormControl, Row } from "react-bootstrap";

const BookList = (props) => {
  const { books } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <>
      <FormControl
        type="text"
        placeholder="Cerca per titolo..."
        className="mb-3"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <Row className="align-items-center">
        {filteredBooks.map((book) => (
          <Col key={book.asin} xs={12} md={3} className="mb-5">
            <Card className="mb-4 h-100 text-white" bg="dark">
              <Card.Img
                variant="top"
                src={book.img}
                className="img-fluid object-fit-cover"
                style={{ height: "400px" }}
              />
              <Card.Body>
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
    </>
  );
};

export default BookList;
