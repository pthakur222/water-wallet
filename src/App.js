import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// page components
import Menu from './components/Menu'
// pages
import Home from './pages/Home'
import Journey from './pages/Journey'
import ActionPlan from './pages/ActionPlan';

const App = () => {
  return (
    <Router>
      <Menu />
      <main>
        <Container>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={Journey} />
            <Route path='/action' component={ActionPlan} />
          </Switch>
        </Container>
      </main>
     
    </Router>
  )
}

export default App
