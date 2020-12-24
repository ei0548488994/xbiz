import { combineReducers } from 'redux';
import categoryReducer from './category.reducer';
import businessReducer from './business.reducer'
import locationReducer from './location.reducer'
import placesReducer from './places.reducer'

export default combineReducers({
    category:categoryReducer,
    business:businessReducer,
    location:locationReducer,
    places:placesReducer
})