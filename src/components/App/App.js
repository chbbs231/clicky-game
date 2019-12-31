import React from 'react'
import './App.css'
import Container from '../Container/Container'
import NavBar from '../NavBar/NavBar'
import GridList from '../GridList/GridList'
// import { ThemeProvider, AppBar, Container, GridList, GridListTile } from '@material-ui/core'

class App extends React.Component {

  state = {
    score: 0
  }

  incrementScore() {
    console.log(this)
    // this.setState({ score: (this.state.score + 1) })
  }

  render() {
    return (
      <>
        <NavBar score={this.state.score} />
        <Container>
          <GridList incrementScore={this.incrementScore} />
        </Container>
      </>
    )
  }

}

export default App
