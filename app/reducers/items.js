export default function reducer(state, action) {
  let newState

  switch (action.type) {
    case 'SELECT_ITEM':
      newState = { ...state, list: state.list.slice(), basket: state.basket.slice() }

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
      newState = { ...state, basket: state.basket.slice() }
      let index = newState.basket.map(function(e) { return e.id }).indexOf(action.payload)
      newState.basket.splice(index, 1)
      break

    case 'PAYMENT_START':
      newState = { ...state, modal: true }
      break

    case 'PAYMENT_CANCEL':
      newState = { ...state, modal: false }
      break

    case 'PAYMENT_CONFIRM':
      newState = { ...state, basket: [], modal: false }
      break

    default:
      let history = localStorage.getItem('items')
      let defaultValues = {
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
        modal: false
      }

      newState = (history === null) ? defaultValues : { ...defaultValues, ...JSON.parse(history) }
  }

  localStorage.setItem('items', JSON.stringify(newState))

  return newState
}