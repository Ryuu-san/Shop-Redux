import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

class BigApp extends React.Component {
searchProduct = () =>{
  this.props.OnSearchProduct(this.productName.value)
}
render() {
const{ onAddCountProduct,AddToBasket,productsBasket,AddAmountAdded } = this.props
const newsTemplate = this.props.products.map(function(item) {
  return (
    <Article key={item.id} products={item} productsBasket={productsBasket} onAddCountProduct={onAddCountProduct} AddToBasket={AddToBasket} AddAmountAdded={AddAmountAdded}/>
  )
})

return (
  <div>
 <form>
   <input type="text"
    placeholder="введите часть названия товара"
    onChange = {this.searchProduct}
    ref = {(input) =>{this.productName = input}}
  />
 </form>
  <table className="table">
     <thead> 
         <th>Название</th>
         <th>Цена</th>
         <th>Количество</th>
       </thead>
    {newsTemplate}
  </table>
  <Link to="/Basket"><button type="button" className="GoToBasket">Корзина</button></Link>
  </div>
)
}
} 

class Article extends React.Component {
AddCountProduct = () =>{
    this.props.onAddCountProduct(this.props.products.quantity++)
}

AddProductToBasket = () =>{
  const {id, name, price, amountAdded} = this.props.products
  this.props.AddToBasket({id, name, price, amountAdded})
}

addQuantity = () => {
  const { amountAdded, id } = this.props.products
  this.props.AddAmountAdded({amountAdded, id})
}

render() {
const { name, price, quantity} = this.props.products
return (
  <tbody>
    <tr>
       <td>{name}</td>
       <td>{price}$</td>
       <td>{quantity}</td>
       <button onClick={(event) => {this.AddCountProduct(); this.AddProductToBasket(); this.addQuantity();}}>+</button>
    </tr>
  </tbody>
)
}
}

class App extends React.Component{
render(){
  return(
    <div>
    <BigApp products = {this.props.products}
    productsBasket = {this.props.productsBasket}
    onAddCountProduct={this.props.onAddCountProduct}
    OnSearchProduct={this.props.OnSearchProduct}
    AddToBasket={this.props.AddToBasket}
    AddAmountAdded={this.props.AddAmountAdded}
    />
   </div>
  )
}
}

export default connect(
  state => ({
    products:state.products.filter(products => products.name.toLowerCase().includes(state.filterProduct.toLowerCase())),
    productsBasket:state.productsBasket
  }),
  dispatch => ({
    onAddCountProduct:(item) =>{
      dispatch({type:'ADD_COUNT_PRODUCT', payload:item})
    },
    OnSearchProduct:(name) =>{
    dispatch({type:'SEARCH_PRODUCT', payload:name})
    },
    AddToBasket: (item) =>{
      dispatch({type:'ADD_TO_BASKET', payload:item})
    },
    AddAmountAdded: (item) =>{
      dispatch({type:'ADD_AMOUNT_ADDED', payload:item})
    }
  })
)(App);