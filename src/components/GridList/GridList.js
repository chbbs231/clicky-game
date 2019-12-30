import React from 'react'

class GridList extends React.Component {

  state = {
    cards: [
      { picture: '1.png', clicked: false },
      { picture: '2.png', clicked: false },
      { picture: '3.png', clicked: false },
      { picture: '4.png', clicked: false },
      { picture: '5.png', clicked: false },
      { picture: '6.png', clicked: false },
      { picture: '7.png', clicked: false },
      { picture: '8.png', clicked: false },
      { picture: '9.png', clicked: false },
      { picture: '10.png', clicked: false },
    ]
  }

  shuffleCards() {
    let [...tempArr] = cards,
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

  handleCardClick() {
    this.shuffleCards()
  }

  render () {
    return (
      <div>
        {cards.map(elem => {
          return (
            
          )
        })}
      </div>
    )
  }

}