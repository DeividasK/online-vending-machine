export default function reducer(state = {
    list: [
      { id: 1, name: 'Mars', price: 3.50 },
      { id: 2, name: 'Snickers', price: 3.50 },
      { id: 3, name: 'Twix', price: 4.50 },
      { id: 4, name: 'Bounty', price: 3.50 },
      { id: 5, name: 'Tupla', price: 2.50 },
    ],
    basket: [
      { id: 1, name: 'Mars', price: 3.50, count: 1 },
      { id: 2, name: 'Snickers', price: 3.50, count: 2 },
      { id: 3, name: 'Twix', price: 4.50, count: 1 },
    ],
  }, action) {

  let newState = { list: state.list.slice(), basket: state.basket.slice() }

  switch (action.type) {
    case 'SELECT_ITEM':
      // Check if item is already in a basket
      let basketIndex = newState.basket.map(function(e) { return e.id }).indexOf(action.payload)

      if (basketIndex !== -1) {
        newState.basket[basketIndex].count += 1
      } else {
        // Check the index of an item
        let listIndex = newState.list.map(function(e) { return e.id }).indexOf(action.payload)
        newState.basket.push({ ...newState.list[listIndex], count: 1 })
      }
      break

    case 'REMOVE_ITEM':
      let index = newState.basket.map(function(e) { return e.id }).indexOf(action.payload)
      newState.basket.splice(index, 1)
      break
  }

  return newState
}