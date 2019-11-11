import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {Link} from "react-router-dom"

class BigApp extends React.Component {
    render() {
    let newsTemplate
    const{ RemoveCountProduct } = this.props
   
    if(this.props.productsBasket.length){
        newsTemplate = this.props.productsBasket.map(function(item) {
            return (
              <Article key={item.id} productsBasket={item} RemoveCountProduct={RemoveCountProduct}/>
            )
          })
    }else{
        newsTemplate = <div>Корзина пустая</div>
    }
    
    return (
      <div>
      <table className="table">
         <thead> 
             <th>Название</th>
             <th>Цена</th>
             <th>Количество</th>
           </thead>
        {newsTemplate}
      </table>
      <Link to="/Products"><button type="button" className="GoToBasket">Перейти к списку товаров</button></Link>
      <button className="GoToBasket" onClick={this.props.RemoveBasketProduct}>Удалить все</button>
      </div>
    )
  }
} 
    
    class Article extends React.Component {
      AddCountProduct = () =>{
        if(this.props.productsBasket.amountAdded == 0){
         return
        }else{
            this.props.RemoveCountProduct(this.props.productsBasket.amountAdded--)
        }
    }

    render() {
    const { name, price, amountAdded} = this.props.productsBasket
    return (
      <tbody>
        <tr>
           <td>{name}</td>
           <td>{price}$</td>
           <td>{amountAdded}</td>
           <button onClick={this.AddCountProduct}>-</button>
        </tr>
      </tbody>
    )
    }
    }
    
   class App extends React.Component{
    render(){
      return(
        <div>
        <BigApp productsBasket = {this.props.productsBasket}
        RemoveCountProduct={this.props.RemoveCountProduct}
        RemoveBasketProduct={this.props.RemoveBasketProduct}
        />
       </div>
      )
    }
  }

  export default connect(
      state => ({
        productsBasket:state.productsBasket
      }),
      dispatch => ({
        RemoveCountProduct:(item) =>{
          dispatch({type:'REMOVE_PRODUCT_UNIT', payload:item})
        },
       RemoveBasketProduct:() =>{
         dispatch({type:'REMOVE_BASKET_PRODUCT'})
       }
      })
  )(App);