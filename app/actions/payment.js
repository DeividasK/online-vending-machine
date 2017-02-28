import store from 'store'
const { dispatch } = store

export function pay() {
  dispatch({ type: 'PAYMENT_START' })
}

export function confirmPayment() {
  dispatch({ type: 'PAYMENT_CONFIRM' })
}

export function cancelPayment() {
  dispatch({ type: 'PAYMENT_CANCEL' })
}