import React from 'react'
import './App.css'
import Container from '../Container/Container'
import NavBar from '../NavBar/NavBar'
import GridList from '../GridList/GridList'
// import { ThemeProvider, AppBar, Container, GridList, GridListTile } from '@material-ui/core'

class App extends React.Component {


  render() {
    return (
      <>
        <NavBar />
        <Container>
          <GridList />
        </Container>
      </>
    )
  }

}

export default App
