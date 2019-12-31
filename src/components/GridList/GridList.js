import React from 'react'
import GridListCard from '../GridListCard/GridListCard'

const cards = [
  { image: './assets/images/1.png', clicked: false },
  { image: './assets/images/2.png', clicked: false },
  { image: './assets/images/3.png', clicked: false },
  { image: './assets/images/4.png', clicked: false },
  { image: './assets/images/5.png', clicked: false },
  { image: './assets/images/6.png', clicked: false },
  { image: './assets/images/7.png', clicked: false },
  { image: './assets/images/8.png', clicked: false },
  { image: './assets/images/9.png', clicked: false },
  { image: './assets/images/10.png', clicked: false },
  { image: './assets/images/11.png', clicked: false },
  { image: './assets/images/12.png', clicked: false },
]

class GridList extends React.Component {

  state = { cards }

  shuffleCards() {
    let [...tempArr] = this.state.cards,
      currentIndex = tempArr.length,
      tempValue,
      randomIndex
    
    while (0 !== currentIndex) {
      randomIndex = Math.floor( Math.random() * currentIndex )
      currentIndex -= 1

      tempValue = tempArr[currentIndex]
      tempArr[currentIndex] = tempArr[randomIndex]
      tempArr[randomIndex] = tempValue
    }

    this.setState({ cards: tempArr })

  }

  handleCardClick(event, index, image) {
    console.log(`Card ${image} has been clicked!`)
    if (this.state.cards[index].clicked) {
      alert('YOU LOSE!!')
      this.setState({ cards: [
        { image: './assets/images/1.png', clicked: false },
        { image: './assets/images/2.png', clicked: false },
        { image: './assets/images/3.png', clicked: false },
        { image: './assets/images/4.png', clicked: false },
        { image: './assets/images/5.png', clicked: false },
        { image: './assets/images/6.png', clicked: false },
        { image: './assets/images/7.png', clicked: false },
        { image: './assets/images/8.png', clicked: false },
        { image: './assets/images/9.png', clicked: false },
        { image: './assets/images/10.png', clicked: false },
        { image: './assets/images/11.png', clicked: false },
        { image: './assets/images/12.png', clicked: false },
      ]})
      this.props.resetScore()
    } else {
      let [...tempArr] = this.state.cards
      tempArr[index].clicked = true
      this.setState({ cards: tempArr })
      this.props.incrementScore()
      this.shuffleCards()
    }
  }

  render() {
    return (
      <div className="row mb-5">
        {this.state.cards.map((card, index) => {
          return (
            <GridListCard 
              key={index} 
              image={card.image} 
              clicked={card.clicked} 
              handleCardClick={event => this.handleCardClick(event, index, card.image)} 
            />
          )
        })}
      </div>
    )
  }

}

export default GridList