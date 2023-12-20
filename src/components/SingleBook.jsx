import { Component } from "react";
import { Card, Col, Row } from "react-bootstrap";

// const SingleBook = (props) => {
//   const { title, img } = props.book;
//   return (
//     <Row className="justify-content-center align-items-center">
//       <Col xs={3}>
//         <Card className="mb-4 h-100 text-white" bg="dark">
//           <Card.Img
//             variant="top"
//             src={img}
//             alt={title}
//             className="img-fluid object-fit-cover"
//             style={{ height: "400px" }}
//           />
//           <Card.Body>
//             <Card.Title>{title}</Card.Title>
//           </Card.Body>
//         </Card>
//       </Col>
//     </Row>
//   );
// };

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const { title, img } = this.props.book;
    const { selected } = this.state;

    return (
      <Row className="justify-content-center align-items-center">
        <Col xs={3}>
          <Card className="mb-4 h-100 text-white" bg="dark" onClick={() => this.setState({ selected: !selected })}>
            <Card.Img
              variant="top"
              src={img}
              alt={title}
              className="img-fluid object-fit-cover"
              style={{ height: "400px", border: selected ? "2px solid red" : "none" }}
            />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SingleBook;
