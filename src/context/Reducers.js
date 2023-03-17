export const cartReducer = (state,action) => {
    switch(action.type){
        case "+":
            return {...state, cart:[...state.cart, {...action.payload, qty:1, }]};
        case "-":
            return { ...state, cart:state.cart.filter((c)=> c.id !== action.payload.id),};

        default:
            return state;
    }
};