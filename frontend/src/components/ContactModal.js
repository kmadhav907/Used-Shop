import React, { useEffect } from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Contact Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={5}>
            <h5>Get in touch</h5>
            <span style={{ fontSize: '21px' }}>
              Drop us a mail at{' '}
              <a href='mailto:usedshopwebsite@gmail.com'>
                usedshopwebsite@gmail.com
              </a>
              <br />
              <p>
                Anything We must know, or need any Help, We try to reply within
                24 – 48 hours at max
              </p>
              <br />
            </span>
          </Col>
          <Col md={1}>
            <br />{' '}
          </Col>
          <Col id='cf'>
            {' '}
            <img
              src='https://images.financialexpress.com/2019/12/ecommerce-1.jpg?w=1200&h=800&imflag=true'
              alt='Enjoy your Shopping'
              style={{ maxWidth: '90%', display: 'block', height: 'auto' }}
              className='rounded bottom'
              fluid='true'
            ></img>
            <img
              src='https://www.shannonspringshotel.com/wp-content/uploads/2020/06/shopping-shannon-springs-2.jpg'
              alt='Enjoy your Shopping'
              style={{ maxWidth: '90%', display: 'block', height: 'auto' }}
              className='rounded top'
              fluid='true'
            ></img>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button onClick={props.onHide} className='btn btn-info spanButton'>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const ContactModal = () => {
  const [modalShow, setModalShow] = React.useState(false)
  useEffect(() => {
    if (modalShow) {
      document.getElementById('my-home').setAttribute('style', 'opacity:0.05;')
    } else {
      document.getElementById('my-home').setAttribute('style', 'opacity:100%;')
    }
  }, [modalShow])

  return (
    <>
      <Button
        className='btn btn-info spanButton'
        onClick={() => setModalShow(true)}
      >
        For Queries and Feedback <i className='fas fa-address-book'></i>
      </Button>

      <CenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default ContactModal
