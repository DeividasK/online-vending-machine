import React from 'react'
import { Container, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap'
import { connect } from 'react-redux'

import Items from 'components/items'
import { pay, confirmPayment, cancelPayment } from 'actions/payment'

@connect((store) => ({
  items: store.items.list,
  basket: store.items.basket,
  modal: store.items.modal
}))
export default class Main extends React.Component {
  state = { modal: false }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render () {
    const { items, basket, modal } = this.props

    let totalAmount = basket.reduce((acc, item) => { return acc + item.price * item.count }, 0)

    return (
      <Container>
        <h1 className="text-center mt-5">Online vending machine</h1>
        <Row className="my-5">
          <Col md={ 8 } className="border py-2">
            <h2 className="text-center">Items list</h2>
            <Items items={ items } />
          </Col>
          <Col md={ 4 } className="basket border py-2">
            <h2 className="text-center">Basket</h2>
            <Items items={ basket } />
            <p className="text-center">Total: <b>€{ totalAmount }</b></p>
            <Button color="success" block onClick={ pay }>Pay</Button>
          </Col>
        </Row>
        <h3>Instructions</h3>
        <ul>
          <li>You can select one or more items to be added to the basket by clicking on a 'Select' button.</li>
          <li>You can remove a single item from the basket by clicking on 'Remove' button.</li>
          <ul>
            <li>You can click 'Pay' to start the payment process.</li>
            <li>If you click on 'Cancel' or anywhere else the payment will be canceled and nothing will be changed.</li>
            <li>If you click on 'Confirm' button all items will be removed from the basket.</li>
          </ul>
          <li>Apps state is persisted to local storage.</li>
        </ul>
        <p><a href="https://github.com/DeividasK/online-vending-machine">Project repository</a> <small>(includes reasoning behind technology choices)</small></p>

        <Modal isOpen={ modal } toggle={ cancelPayment }>
          <ModalHeader toggle={ cancelPayment }>Payment provider</ModalHeader>
          <ModalBody>
            Please confirm your payment of <b>€{ totalAmount }</b>.
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={ confirmPayment }>Confirm</Button>
            { ' ' }
            <Button onClick={ cancelPayment }>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    )
  }
}