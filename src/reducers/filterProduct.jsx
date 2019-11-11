const initialState = ''

export default function filterProduct(state = initialState, action){
    if(action.type === 'SEARCH_PRODUCT'){
        return action.payload
    }
    return state
}