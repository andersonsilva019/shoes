import produce  from 'immer'


export default function cart( state = [], action) {

/* Criamos esse switch para filtrar as actions */
  switch (action.type) {
    case '@cart/ADD_SUCESS':
      return produce(state, draft => {
        const { product } = action;

        draft.push(product)
      })

    case '@cart/REMOVE':
      return produce(state, draft => {

      const productIndex = draft.findIndex( p => p.id === action.id );

      if( productIndex >= 0) {
        draft.splice(productIndex, 1);
      }

      });

    case '@cart/UPDATE_AMOUNT_SUCESS':{

      /* if( action.amount <= 0){
        return state;   //Não vai mexer em nada no estado
      } */

      return produce(state, draft => {
        const productIndex = draft.findIndex( p => p.id === action.id );
        
        if( productIndex >= 0 ){
          draft[productIndex].amount = Number(action.amount);
        }
      })
    }
    default:
      return state;
  }
}