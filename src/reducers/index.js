import updateShoppingCar from './shoppingCar';
import updateBookList from './bookList';

const reducer = (state, action) => {
    return {
        bookList: updateBookList(state, action),
        shoppingCar: updateShoppingCar(state, action)
    }
};

export default reducer;