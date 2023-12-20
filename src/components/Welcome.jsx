import { Alert } from "react-bootstrap";

const Welcome = (props) => (
  <Alert variant="warning" className={props.className}>
    {" "}
    Benvenuti nella nostra libreria online!
  </Alert>
);
export default Welcome;
