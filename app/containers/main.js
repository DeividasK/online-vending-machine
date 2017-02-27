import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { connect } from 'react-redux'

import Items from 'components/items'

@connect((store) => ({
  items: store.items.list,
  basket: store.items.basket
}))
export default class Main extends React.Component {
  render () {
    const { items, basket } = this.props

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
            <p className="text-center">Total: <b>€{ basket.reduce((acc, item) => { return acc + item.price * item.count }, 0)}</b></p>
            <Button color="success" block>Pay</Button>
          </Col>
        </Row>
      </Container>
    )
  }
}