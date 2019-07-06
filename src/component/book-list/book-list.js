import React, { Component} from 'react';
import BookListItem from '../book-list-item';
import './book-list.css'
import {connect} from 'react-redux'
import ErorIndicator from '../error-indicator'
import { withBookstoreService } from '../hoc'
import { fetchBooks, bookAdedToCart } from '../../actions';
import  compose  from '../../utils';
import Spinner from '../spinner';

class BookListContainer extends Component{
    componentDidMount(){
        this.props.fetchBooks();
    }
    render(){
        const {books, loading, error, OnAddedToCart} = this.props;
        if(loading){
           return <Spinner />
        }
        if(error){
            return <ErorIndicator />
         }
        return <BookList books={books} OnAddedToCart={OnAddedToCart}/>
        
    }
}
const mapStateToProps = ({books, loading, error})=>{
    return {books, loading, error};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { bookstoreService } = ownProps;
    return{
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        OnAddedToCart: (id)=> dispatch(bookAdedToCart(id))
    }
}
    



export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);

const BookList =({ books, OnAddedToCart})=>{
    return(
        <ul className="book-list">
            {
                books.map((book, item)=>{
                    return(
                        <li key={item}><BookListItem book={book} OnAddedToCart={() =>OnAddedToCart(book.id)}/></li>
                    )
                })
            }
        </ul>
    )

}