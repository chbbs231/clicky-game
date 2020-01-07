import { createContext } from 'react'

const GameContext = createContext({
  max_score: 0,
  score: 0,
  cards: [],
  resetGame: () => {},
  incrementScore: () => {},
  shuffleCards: () => {},
  handleCardClick: () => {}
})

export default GameContext