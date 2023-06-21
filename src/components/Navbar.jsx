import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="d-flex justify-content-between">
          <div className="rutas">
          <Link to="/" className="text-white ms-3 text-decoration-none">
            🏠 Home
          </Link>
          <Link to="/contacto" className="text-white ms-3 text-decoration-none">
           📒 Contacto
          </Link>
          </div>
          <div className=" text-white ms-3 text-decoration-none">
            🎂 Happy cake
          </div>
        </Container>
      </Navbar>
    </>
  );
}