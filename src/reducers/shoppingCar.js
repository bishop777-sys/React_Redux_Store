const updateShoppingCar= (state, action) =>{
    if(state === undefined){
        return {
            carItems:[],
            orderTotal: 0
        }
    }
    switch(action.type){
        case "BOOKADED_TO_CART":
            return updateOrder(state, action.payload, 1);
        case "BOOKREMOVE_TO_CART":
            return updateOrder(state, action.payload, -1);
        case "ALL_BOOKREMOVE_TO_CART":
            const item = state.shoppingCar.carItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count)
        default:
            return state.shoppingCar;
    }
    
}

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
    const {bookList: { books }, shoppingCar: { carItems }} = state;
    const book = books.find(({id}) => id === bookId);
    const itemIndex = carItems.findIndex(({id}) => id === bookId);
    const item = carItems[itemIndex];
    const newItem = updateItem(book, item, quantity);
    return {
        orderTotal: 0,
        carItems: updateCarItem(carItems, newItem, itemIndex)
    }
}


export default updateShoppingCar;