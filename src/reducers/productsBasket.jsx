

//массив с данными
const initialState = []

//редьюсер
export default function countProducts(state = initialState, action) {
  switch (action.type) {
    case 'REMOVE_PRODUCT_UNIT':
      return [
        ...state
      ]
    case 'REMOVE_BASKET_PRODUCT':
      return [
        ...state = ''
      ]
    case 'ADD_TO_BASKET':
      const nextItem = [...state, action.payload]
      const NewProducts = nextItem.filter((set => f => !set.has(f.id) && set.add(f.id))(new Set))
      return[
        ...state = NewProducts
      ]
    case 'ADD_AMOUNT_ADDED':
    const AmountFilter = state.filter(function(item){
      if(item.id == action.payload.id){
        item.amountAdded += 1
      }
      })
       return[
        ...state
      ]
    default:
      return state
  }
  return state
}