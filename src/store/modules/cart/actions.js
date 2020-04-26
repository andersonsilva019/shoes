export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  }
}

export function addToCartSucess(product) {
  return {
    type: '@cart/ADD_SUCESS',
    product,
  }
}

export function removeFromCart(product) {
  return { 
    type: '@cart/REMOVE',
    product,
  }
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE',
    id,
    amount
  }
}