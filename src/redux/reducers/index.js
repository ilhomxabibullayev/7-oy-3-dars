const initialState = {
    likedProducts: {},
    cart: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'UPDATE_LIKED_PRODUCT':
            return {
                ...state,
                likedProducts: {
                    ...state.likedProducts,
                    [action.payload.productId]: action.payload.isLiked,
                },
            };
        default:
            return state;
    }
};

export default reducer;
