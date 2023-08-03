import React from "react";


const CartContext = React.createContext({
    id:[],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;