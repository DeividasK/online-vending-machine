import React, { PropTypes as T } from 'react'
import { Card, CardTitle, CardText, Button } from 'reactstrap'

import { selectItem, removeItem } from 'actions'

export default class item extends React.Component {
  static propTypes = {
    item: T.shape({
      name: T.string.isRequired,
      price: T.number.isRequired,
      count: T.number
    }).isRequired
  }

  render () {
    const { id, name, price, count } = this.props.item

    return (
      <Card block className="text-center">
        <CardTitle>{ name }</CardTitle>
        <CardText>Price: <b>€{ price }</b></CardText>
        { ! count && <Button onClick={ selectItem.bind(this, id) }>Select</Button> }
        { count && (
          <div>
            <CardText>Count: { count }</CardText>
            <Button onClick={ removeItem.bind(this, id) }>Remove</Button>
          </div>
        )}
      </Card>
    )
  }
}