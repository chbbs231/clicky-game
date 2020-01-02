import React from 'react'
import swal from 'sweetalert'
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

  // Helper function that suffles elements of cards state
  shuffleCards() {
    // Create deep copy of cards state
    let [...tempArr] = this.state.cards,
      currentIndex = tempArr.length,
      tempValue,
      randomIndex
    
    // Shuffle tempArr
    while (0 !== currentIndex) {
      randomIndex = Math.floor( Math.random() * currentIndex )
      currentIndex -= 1

      tempValue = tempArr[currentIndex]
      tempArr[currentIndex] = tempArr[randomIndex]
      tempArr[randomIndex] = tempValue
    }

    // Set state to shuffled array
    this.setState({ cards: tempArr })

  }

  // Event listener for card click
  handleCardClick(event, index, image) {
    // If the card was already clicked
    if (this.state.cards[index].clicked) {
      // Alert the user that they lost
      swal({
        title: 'You Lost!',
        text: `You scored ${this.props.score} point${this.props.score !== 1 ? 's' : ''}!`,
        icon: 'error',
        button: 'Okay'
      })
      // Reset cards state
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
      // Reset parent's score state using parent function
      this.props.resetScore()
    } else {
      // Card has not been clicked already
      // Set card clicked to true
      let [...tempArr] = this.state.cards
      tempArr[index].clicked = true
      this.setState({ cards: tempArr })
      // Increment parent's score state using parent function
      this.props.incrementScore()
      this.shuffleCards()
    }
  }

  render() {
    return (
      <div className="row mb-4">
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