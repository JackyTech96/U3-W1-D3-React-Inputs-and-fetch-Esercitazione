import React, { Component } from "react";
import { Col, Container, FormControl, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    searchTerm: "",
  };

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { books } = this.props;
    const { searchTerm } = this.state;

    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
      <Container>
        <FormControl
          type="text"
          placeholder="Cerca per titolo..."
          className="mb-3"
          value={searchTerm}
          onChange={this.handleSearchChange}
        />

        <Row className="align-items-center">
          {filteredBooks.map((book) => (
            <Col key={book.asin} xs={12} md={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
