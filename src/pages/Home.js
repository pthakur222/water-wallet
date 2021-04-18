
import { LinkContainer } from 'react-router-bootstrap'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {
  Button,
  Container,
  Icon,
  
} from 'semantic-ui-react'

const Home = () => {

  return (
    <Container invert fluid>
      <Jumbotron className="jumbotron">
        <h2 style={{fontFamily: 'fantasy', color:'honeydew'}}>Despite the fact that water covers more than 71 % of the planet’s surface, more than half of the world’s population endures extreme water scarcity for at least one month a year.</h2>
        <h2 style={{fontFamily: 'fantasy', color:'honeydew'}}> Today 7 out of 10 people can count on having running water in their homes, but the current estimation predicts that by 2040 up to 20 more countries won’t have enough water to meet demand year-round.</h2>
<br/>
<br/>
<h4 style={{fontFamily: 'cursive', color:'khaki'}}>Cape town in South Africa could become the first major city in world to run out of water, meaning 4 million people would stop getting running water. London, Sao Paulo, Melbourne, Jakarta, Beijing, Istanbul, Bangalore, Tokyo, Barcelona, Mexico city will all face their day zero in the next few decades unless their water use radically changes. </h4>
<br/>
<h4 style={{fontFamily: 'roboto', color:'ivory'}}>The trick is to recognise how valuable water is before there isn’t enough of it, & to remember that our fates are tied to what rushes out of our taps.</h4>
   
        <p>
        <LinkContainer to='/about'>
          <Button secondary size="huge" style={{float:'right'}}>
            Let's Start
          <Icon name='right arrow' /> 
          </Button>
          </LinkContainer>
        </p>
      </Jumbotron>
    </Container>
  )
}

export default Home