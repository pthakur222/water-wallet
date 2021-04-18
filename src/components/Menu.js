import { Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Menu = () => {
  return (
    <Navbar expand='lg' collapseOnSelect bg="light" variant="light" >
    <div></div>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand color='blue'>Water Wallet</Navbar.Brand>
        </LinkContainer>
         
      </Container>
    </Navbar>
  )
}

export default Menu
