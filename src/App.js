import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import Game from './pages/Game'
import { Container, AppBar } from '@material-ui/core'
import GridList from './components/GridList/GridList'

class App extends React.Component {

  state = {
    score: 0
  }

  incrementScore() {
    this.setState({ score: (this.state.score + 1) })
  }

  resetScore() {
    this.setState({ score: 0 })
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path='/game'>
              <Game />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
  
}
{/*<NavBar score={this.state.score} />
<Container>
  <GridList 
    incrementScore={() => this.incrementScore()} 
    resetScore={() => this.resetScore()} 
    score={this.state.score}
  />
</Container>
<Footer />*/}

export default App
