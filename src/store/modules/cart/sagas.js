import { call, put, all, takeLatest, select } from 'redux-saga/effects'
import api from '../../../services/api'
import { formatPrice } from '../../../util/format'
import { addToCartSucess, updateAmount } from './actions'

/* É como se fosse um async mais potente */
/* Essa funcão é responsavel por acessar a API e 
buscar informações mais detalhadas do produto */
function* addToCart({ id }) {

  const productExists = yield select(
    state => state.cart.find(p => p.id === id),
  )
  
  if(productExists){

    const amount = productExists.amount + 1;

    yield put(updateAmount(id, amount))
  }else{

    const response = yield call(api.get, `/products/${id}`);
  
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price)
    }
  
    yield put(addToCartSucess(data))
  }


}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart)
]);