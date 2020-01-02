import React from 'react'
import './Footer.css'
import Container from '../Container/Container'

const Footer = _ => {
  return (
    <footer className="page-footer font-small primary-color">
      <Container>
        <div className="row d-flex align-items-center">

          {/* Copyright */}
          <div className="col-md-6 col-lg-6 ml-lg-0">
            <div className="text-center text-md-left py">
              <span>© 2020 Nathanael Hauser</span>
            </div>
          </div>

          {/* Github Repo */}
          <div className="col-md-6 col-lg-6 ml-lg-0">
            <div className="text-center text-md-right py">
              <a href="https://github.com/mesmerizingYeti/clicky-game">Githup Repo</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer