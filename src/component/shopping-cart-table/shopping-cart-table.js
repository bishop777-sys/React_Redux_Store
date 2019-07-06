import React from 'react';
import './shopping-cart-table.css';
import {connect} from 'react-redux';
import {bookAdedToCart, AllBooksRemoveToCart, bookRemoveToCart} from '../../actions';

const ShoppingCartTable = ({items, total, onIncrease,  onDecrease, onDelete}) => {
    const renderRow = (item, idx) =>{
 
        const{id, name, count, total} = item;
        return(
            <tr key={id}>
                <td>{idx}</td>
                <td>{name}</td>
                <td>{count}</td>
                <td>${total}</td>
                <button onClick={()=> onIncrease(id)}
                     className="btn btn-outline-success">
                     <i className="fa fa-plus-circle"/>
                 </button>
                 <button 
                     onClick={()=> onDecrease(id)}
                     className="btn btn-outline-warning">
                     <i className="fa fa-minus-circle"/>
                 </button>
                 <button 
                     onClick={()=> onDelete(id)}
                     className="btn btn-outline-danger">
                     <i className="fa fa-trash-o"/>
                 </button>
            </tr>
            
        )
    }
        return(
        <div className="shopping-cart-table">
            <h2>Ваш заказ</h2>
            <table className="table">
                <thead />
                <tbody>
                    {items.map(renderRow)}
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}

const mapStateToProps = ({ carItems, orderTotal}) =>{
    return{
        items: carItems,
        total:orderTotal
    }
}

const mapDispatchToProps ={
    onIncrease: bookAdedToCart,
    onDecrease: bookRemoveToCart,
    onDelete: AllBooksRemoveToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);