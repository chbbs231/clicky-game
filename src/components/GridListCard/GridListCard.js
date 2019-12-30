import React from 'react'

const GridListCard = props => {
  return (
    <div className="col-3 mt-4">
      <div className="card">
        <img className="card-img-top" src={props.image} alt="i has value" onClick={props.handleCardClick} />
      </div>
    </div>
  )
}

export default GridListCard