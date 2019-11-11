
//массив с данными
const initialState = [
    {
        id: 1,
        name: 'Хлеб',
        price: 20,
        quantity:0,
        amountAdded:0
      },
      {
        id: 2,
        name: 'Сыр',
        price: 40,
        quantity:0,
        amountAdded:0
      },
      {
        id: 3,
        name: 'Макароны',
        price: 80,
        quantity:0,
        amountAdded:0
      },
      {
        id: 4,
        name: 'Печеньки',
        price: 10,
        quantity:0,
        amountAdded:0
      }
]

//редьюсер
export default function countProducts(state = initialState, action) {
    if(action.type === 'ADD_COUNT_PRODUCT'){
      return [
        ...state
      ]
  }
  return state
}