import React from 'react'
import { Card } from 'react-bootstrap'

const Information = () => {
  return (
    <>
      <h1 className='fontSriracha'>About Us</h1>
      <Card className='envelope'>
        <Card.Body>
          <span className='letter'>
            The Best Place to Find the Best Products <br />
            Do check out our latest Collections
            <br />
          </span>
        </Card.Body>
      </Card>
    </>
  )
}

export default Information
