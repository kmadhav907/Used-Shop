import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='fontAmarnath'>
            <h5>Do Check out our Social Media Handles</h5>
            <a
              href='https://www.instagram.com/usedshopwebsite/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram fa-3x'></i>
            </a>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a
              href='https://www.reddit.com/user/Itchy_Excuse_4842'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-reddit-alien fa-3x'></i>
            </a>
            <span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <a
              href='https://twitter.com/UsedShop1'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter fa-3x'></i>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className='text-center py-3 fontAmarnath span18px'>
            Copyright &copy; USEDSHOP
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
