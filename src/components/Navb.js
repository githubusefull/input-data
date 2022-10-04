import { Navbar, Form, Button, Nav, Container} from 'react-bootstrap';
import { GiWifiRouter } from "react-icons/gi";


function Navb() {

  return (
    <>
      <Navbar bg="dark" variant="dark" className="mb-2" >
        <Container>
          <Navbar.Brand ><GiWifiRouter size='2.7rem' /></Navbar.Brand>


            
          <Nav className="me-1">

            <Nav.Link exact to="listdata" active href="listdata" className='me-2' >List-Data</Nav.Link>
            <Nav.Link exact to="adddata" active  href="adddata" className='' >Add-Data</Nav.Link>

          </Nav>
          
          </Container>
      </Navbar>
    </>
  );
}

export default Navb;