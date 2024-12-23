import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers/rootReducer';

const initialProductsState = {
    products: [],
};

const initialCartState = {
    cart: [],
};

const productReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
