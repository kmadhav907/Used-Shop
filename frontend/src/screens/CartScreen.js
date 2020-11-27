import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id

  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <span as='h1' style={{ fontSize: '40px', color: 'white' }}>
            Shopping Cart
          </span>
          <br />
          <br />
          {cartItems.length === 0 ? (
            <Message className='bg-light '>
              <h2 className='fontSriracha'>YOUR CART IS EMPTY</h2>
            </Message>
          ) : (
            <ListGroup className='bg-light'>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link
                        to={`/product/${item.product}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <span style={{ fontSize: '20px' }}>{item.name}</span>
                      </Link>
                    </Col>
                    <Col md={2}>
                      <span style={{ fontSize: '20px', color: ' white' }}>
                        ${item.price}
                      </span>
                    </Col>
                    <Col md={2}>
                      <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <span style={{ fontSize: '35px' }}>
                  Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}
                  ) items
                </span>
                <br />
                <h5>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-primary spanButton'
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  <h5>Proceed To Check Out</h5>
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <Row>
        <Col md={6}>
          <Link to='/' className='btn btn-warning'>
            <span style={{ fontSize: '20px' }}>BACK</span>
          </Link>
        </Col>
      </Row>
    </>
  )
}

export default CartScreen
