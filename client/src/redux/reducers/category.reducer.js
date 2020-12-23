import {
    SET_CATEGORY, SET_SELECTED_CATEGORY_ID, SET_RESULT_OF_SEARCH_BY_TEXT
    , SET_RESULT_OF_SEARCH_BY_CATEROTY, SET_POPULAR_CATEGORIES
} from '../actions/category.action';

const initialState = {
    category: {},
    selectedCategoryId: "",
    resultOfSearch: [
        // { location: "petach tkava", lat: 32.0907852, len: 34.9222051, name: "blah" },
        // { location: "london", lat: 51.5285582, len: 0.0384839, name: "blah" },
        // { location: "dimona", lat: 31.0187041, len: 35.1658003, name: "blah" }    
    ],
    popularCategories: []

}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CATEGORY:
            return { ...state, category: action.payload }
        case SET_POPULAR_CATEGORIES:
                {
                    console.log("reducer")
                    var mainCategoriesArr = [];
                    // Object.keys(action.payload).forEach(key => mainCategoriesArr.push({ name: key, value: action.payload[key] }))
                    console.log(mainCategoriesArr)
                return { ...state, popularCategories: mainCategoriesArr }

            }
        case SET_SELECTED_CATEGORY_ID:
            return { ...state, selectedCategoryId: action.payload }
        case SET_RESULT_OF_SEARCH_BY_CATEROTY: {

            return { ...state, resultOfSearch: action.payload }
        }
        case SET_RESULT_OF_SEARCH_BY_TEXT:
            {
                debugger
                console.log("action")
                console.log(action.payload)
                return { ...state, resultOfSearch: action.payload }
            }
        default:
            return state

    }
}

