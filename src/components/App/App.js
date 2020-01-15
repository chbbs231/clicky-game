import React from 'react'
import './App.css'
import Container from '../Container/Container'
import NavBar from '../NavBar/NavBar'
import GridList from '../GridList/GridList'
import Footer from '../Footer/Footer'

class App extends React.Component {

  state = {
    score: 0,
    topScore: 0
  }

  incrementScore() {
    this.setState({ score: (this.state.score + 1) })
  }

  resetScore() {
    this.setState({ score: 0 })
  }

  updateTopScore() {
    if (this.state.topScore < this.state.score) {
      this.setState({ topScore: this.state.score })
    }
  }

  render() {
    return (
      <>
        <NavBar score={this.state.score} topScore={this.state.topScore} />
        <Container>
          <GridList
            incrementScore={() => this.incrementScore()}
            resetScore={() => this.resetScore()}
            updateTopScore={() => this.updateTopScore()}
            score={this.state.score}
          />
        </Container>
        <Footer />
      </>
  )}

}

export default App
