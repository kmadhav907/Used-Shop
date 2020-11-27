import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FormContainer = ({ children }) => {
  return (
    <Container>
      <Row>
        <Col md={5} className='bg-light rounded fontSriracha'>
          {children}
        </Col>
        <Col md={3}></Col>

        <Col md={4} className='fontAmarnath'>
          <Card variant='dark' className='rounded'>
            <Card.Header>
              <h5 style={{ color: 'white' }}> Update and New Features</h5>
            </Card.Header>
            <Card.Body>
              <Card.Title>
                {' '}
                <h4>Latest Features</h4>{' '}
              </Card.Title>
              <Card.Text style={{ color: 'white' }}>
                <span style={{ fontSize: '20px' }}>
                  Bug Improvements and Quality of Life Changes
                </span>
                <br />
                <br />
                Updated Last 10mins ago
              </Card.Text>
            </Card.Body>
          </Card>
          <br />
          <ListGroup>
            <ListGroup.Item variant='success' className='table-hover'>
              <span style={{ fontSize: '18px' }}> Minor Bug Fixes </span>
            </ListGroup.Item>
            <ListGroup.Item variant='success' className='table-hover'>
              <span style={{ fontSize: '18px' }}> Added Paypal Fixes </span>
            </ListGroup.Item>
            <ListGroup.Item variant='success' className='table-hover'>
              <span style={{ fontSize: '18px' }}>
                {' '}
                Click Here to view Sale{' '}
                <Link to='/'>
                  <i className='fas fa-tags' style={{ color: 'black' }}></i>
                </Link>{' '}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
