import { Component } from "react";
import { Badge, Button, Card } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;

    return (
      <Card className={`mb-4 h-100 text-white ${this.state.selected ? "border-danger" : ""}`} bg="dark">
        <Card.Img
          variant="top"
          src={book.img}
          alt={book.title}
          className="img-fluid object-fit-cover"
          style={{ height: "400px" }}
          onClick={() => this.setState({ selected: !this.state.selected })}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            {book.description} <Badge bg="primary">{book.price}€</Badge>
          </Card.Text>
          <Button variant="success">Acquista</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
