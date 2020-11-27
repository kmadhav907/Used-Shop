import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='my-2 my-lg-0 form-inline span18px'
      ></Form.Control>
      <span>&nbsp; &nbsp;</span>
      <Button
        type='submit'
        variant='outline-success'
        className='p-2 spamButton'
        style={{ fontSize: '16px' }}
      >
        Search<span>&nbsp; &nbsp;</span>
        <i className='fas fa-search'></i>
      </Button>
    </Form>
  )
}

export default SearchBox
