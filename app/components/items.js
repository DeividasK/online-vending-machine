import React, { PropTypes as T } from 'react'
import { CardColumns } from 'reactstrap'

import Item from 'components/item'

export default class items extends React.Component {
  static defaultProps = {
    items: T.arrayOf(T.object).isRequired
  }

  render () {
    const { items } = this.props

    return (
      <CardColumns>
        { items.map((item, index) => { return <Item item={ item } key={ index } /> })}
      </CardColumns>
    )
  }
}