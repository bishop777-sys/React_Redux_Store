const booksLoaded = (newBooks) => {
    return{
        type: "FETCH_BOOKS_LOADED",
        payload: newBooks
    }
};

const booksRequested =()=>{
    return{
        type: 'FETCH_BOOKS_REQUEST'
    }
};
const bookserror =(payload)=>{
    return{
        type: 'FETCH_BOOKS_ERROR',
        payload: payload
    }
};

const bookAdedToCart =(bookId)=>{
    return{
        type: 'BOOKADED_TO_CART',
        payload: bookId
    }
};

const bookRemoveToCart =(bookId)=>{
    return{
        type: 'BOOKREMOVE_TO_CART',
        payload: bookId
    }
};

const AllBooksRemoveToCart =(bookId)=>{
    return{
        type: 'ALL_BOOKREMOVE_TO_CART',
        payload: bookId
    }
};

const fetchBooks =(bookstoreService, dispatch)=> () =>{
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err)=> dispatch(bookserror(err)));
}

export {
    fetchBooks,
    bookAdedToCart,
    AllBooksRemoveToCart,
    bookRemoveToCart
};