import { combineReducers } from 'redux';
import reducer from './index';

const rootReducer = combineReducers({
    products: reducer,
});

export default rootReducer;
