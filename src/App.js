import React from 'react'
import Container from '../Container/Container'
import NavBar from '../NavBar/NavBar'
import GridList from '../GridList/GridList'
import Footer from '../Footer/Footer'

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
      <>
        <NavBar score={this.state.score} />
        <Container>
          <GridList 
            incrementScore={() => this.incrementScore()} 
            resetScore={() => this.resetScore()} 
            score={this.state.score}
          />
        </Container>
        <Footer />
      </>
    )
  }

}

export default App
