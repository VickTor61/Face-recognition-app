import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./Signin.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <Form className='text-primary bg-light p-4 shadow-lg rounded py-4' style={{ width: "500px", margin: "0 auto" }}>
    <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="email" placeholder="Email" />
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
      <Form.Label column sm={2}>
        Password
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="password" placeholder="Password" />
      </Col>
    </Form.Group>
   
   <Button type="submit" variant="outline-primary" onClick={() => onRouteChange("home")}>Signin</Button>

  </Form>
  );
};

export default SignIn;
