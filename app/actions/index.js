import store from 'store'
const { dispatch } = store

export function selectItem(itemId) {
  dispatch({ type: 'SELECT_ITEM', payload: itemId })
}

export function removeItem(itemId) {
  dispatch({ type: 'REMOVE_ITEM', payload: itemId })
}