import { SET_CATEGORY, SET_SELECTED_CATEGORY_ID ,SET_RESULT_OF_SEARCH_BY_CATEROTY} from '../actions/category.action';

const initialState = {
    category: {},
    selectedCategoryId: "",
    resultOfSearch: {},
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, category: action.payload }
        case SET_SELECTED_CATEGORY_ID:
            return { ...state, selectedCategoryId: action.payload }
        case SET_RESULT_OF_SEARCH_BY_CATEROTY:
            return { ...state, resultOfSearch: action.payload }
        default:
            return state

    }
}

