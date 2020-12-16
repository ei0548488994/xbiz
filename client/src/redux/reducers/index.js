import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import businessReducer from './business.reducer'

export default combineReducers({
    category:categoryReducer,
    business:businessReducer
})