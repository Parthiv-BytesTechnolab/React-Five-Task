import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';


function Navbars() {

  return (
    <>
      <Navbar bg="dark" variant="dark" className='position-relative'>
          <Container>
            <Navbar.Brand className='fs-5 fw-bold'><NavLink to="/" className='list-unstyled text-light text-decoration-none'> Crud App</NavLink></Navbar.Brand>
            <Nav className="ms-auto">
              <NavLink to="/" className='list-unstyled text-light text-decoration-none mx-3 fs-5 fw-bold'>Home</NavLink>
              <NavLink to="/user-table" className='list-unstyled text-light text-decoration-none mx-3 fs-5 fw-bold'>Use-Table</NavLink>
              <NavLink to="/task3" className='list-unstyled text-light text-decoration-none mx-3 fs-5 fw-bold'>Task 3</NavLink>
            </Nav>
          </Container>
        </Navbar>
  </>
  )
}

export default Navbars;