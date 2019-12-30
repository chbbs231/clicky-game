import React from 'react'
import './App.css'
import Container from '../Container/Container'
import NavBar from '../NavBar/NavNar'
// import { ThemeProvider, AppBar, Container, GridList, GridListTile } from '@material-ui/core'

let pictures = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png',
                '7.png', '8.png', '9.png', '10.png', '11.png', '12.png']

class App extends React.Component {


  render() {
    return (
      <>
        <NavBar />
        <Container>
          
        </Container>
      </>
    )
  }

}

export default App
