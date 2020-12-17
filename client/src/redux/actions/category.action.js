import CategoryService from '../../services/category.service';

export const SET_CATEGORY = "[category] SET_CATEGORY";
export const SET_SELECTED_CATEGORY_ID="[category] SET_SELECTED_CATEGORY_ID"
export const SET_RESULT_OF_SEARCH_BY_CATEROTY="[category] SET_RESULT_OF_SEARCH_BY_CATEROTY"
export const SET_RESULT_OF_SEARCH_BY_TEXT="[category] SET_RESULT_OF_SEARCH_BY_TEXT"
export const SET_POPULAR_CATEGORIES="[category] SET_POPULAR_CATEGORIES"
export function setCategory(category) {
    return {
        type: SET_CATEGORY,
        payload: category
    }
}
export function setPopularCategories(popularcategory) {
    return {
        type: SET_POPULAR_CATEGORIES,
        payload: popularcategory
    }
}

export function setSelectedCategoryId(id) {
    return {
        type: SET_SELECTED_CATEGORY_ID,
        payload: id
    }
}

// export function selectedCategoryId(id){

// }
export function getAllCategories() {
    return async (dispatch) => {
        const categories = await CategoryService.getAllCategories();
        dispatch(setCategory(categories))
    }
}

export function PopularCategories() {
    debugger
    return async (dispatch) => {
        const popularCategories = await CategoryService.getPopularCategories()
        debugger
        dispatch(setPopularCategories(popularCategories))
    }
}

export function setResultOfSearchByCategory(text) {
    return {
        type: SET_RESULT_OF_SEARCH_BY_CATEROTY,
        payload: text
    }
}
export function getResultOfSearchByCategory(text) {
    return async (dispatch) => {
        const categories = await CategoryService.getResultOfSearchByCategory(text);
        debugger;
        dispatch(setResultOfSearchByCategory(categories))
    }
}
export function setResultOfSearchByText(text) { 
    debugger;
    return {
        type: SET_RESULT_OF_SEARCH_BY_TEXT,
        payload: text
    }
}
export function getResultofSearchByText(text) {
    debugger;
    return async (dispatch) => {
        debugger
        const data = await CategoryService.getResultSearchByText(text);
        console.log(data,"   dataaaaaaaaaaa");
        dispatch(setResultOfSearchByText(data))
    }
}

