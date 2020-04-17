export default function cart( state = [], action) {

/* Criamos esse switch para filtrar as actions */
  switch (action.type) {
    case 'ADD_TO_CART':
      return [ ...state, action.product];
    default:
      return state;
  }
}