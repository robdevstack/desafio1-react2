import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

export default () => {
  return (
    <Container className=" container pt-5 text-center">
      <h1 className="mb-4">Cuentanos, ¿En que podemos ayudarte?</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Descripción</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button className="btn btn-danger">Enviar</button>
    </Form>
    </Container>
  );
};
