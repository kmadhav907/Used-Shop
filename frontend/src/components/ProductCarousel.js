import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Col, Image, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import Information from './Information'
import ContactModal from './ContactModal'

const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Row>
      <Col md={6}>
        <Carousel pause='hover' className='bg-light fontAmarnath'>
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link to={`/product/${product._id}`}>
                <Image src={product.image} alt={product.name} fluid />
                <Carousel.Caption className='carousel-caption'>
                  <span className='span18px'>
                    {product.name} (${product.price})
                  </span>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </Col>
      <Col md={6}>
        <Information />
        <br />
        <ContactModal />
      </Col>
    </Row>
  )
}

export default ProductCarousel
