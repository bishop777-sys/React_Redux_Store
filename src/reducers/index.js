const initialState = {
    books:[],
    loading: true,
    error: null,
    carItems:[
        {
            id:1,
            name:"Book1",
            count: 3,
            total: 150
        },
        {
            id:2,
            name:"Book2",
            count: 2,
            total: 170
        }
    ],
    orderTotal: 220
};

const updateCarItem = (carItems, item, idx) =>{
    if(item.count === 0){
        return[
            ...carItems.slice(0, idx),
            ...carItems.slice(idx+1)
        ]
    }
    if(idx === -1){
        return [
            ...carItems,
            item
        ]
    }
    return [
        ...carItems.slice(0, idx),
        item,
        ...carItems.slice(idx+1)
    ];
}
const updateItem = (book, item = {}, quantity) =>{
    const {id = book.id, count = 0, name = book.name, total = 0} = item;
    return{
        id,
        name,
        count: count + quantity,
        total: total + quantity * book.price
    }
}

const updateOrder = (state, bookId, quantity)=>{
    const {books, carItems} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = carItems.findIndex(({id}) => id === bookId);
    const item = carItems[itemIndex];
    const newItem = updateItem(book, item, quantity);
    return {
        ...state,
        carItems: updateCarItem(state.carItems, newItem, itemIndex)
    }
}


const reducer = (state = initialState, action) => {
    console.log(action.type, action.payload);
    switch(action.type){
   
        case "FETCH_BOOKS_LOADED":
            console.log(state);
            return{
                
                ...state,
                books:action.payload,
                loading:false,
                error: null
            };
        case "FETCH_BOOKS_REQUEST":
            return{
                ...state,
                books: [],
                loading: true,
                error: null
            }
        case "FETCH_BOOKS_ERROR":
            return{
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        case "BOOKADED_TO_CART":
            return updateOrder(state, action.payload, 1);
        case "BOOKREMOVE_TO_CART":
            return updateOrder(state, action.payload, -1);
        case "ALL_BOOKREMOVE_TO_CART":
            const item = state.carItems.find(({id}) => id === action.payload);
            console.log(item);
            return updateOrder(state, action.payload, -item.count)
        default:
            return state;

    }
};

export default reducer;