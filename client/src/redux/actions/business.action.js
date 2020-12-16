

import BusinnesService from "../../services/business.service";
export const SET_SELECTED_BUSINESS_DETAILS="[business] SET_SELECTED_BUSINESS_DETAILS"
export const CREATE_BUSINESS="[business] CREATE_BUSINESS"
export function setSelectedBusinessDetails(businessDetails){
    return{
        type:SET_SELECTED_BUSINESS_DETAILS,
        payload:businessDetails
    }
}
export function setBusiness(business) {
    debugger
    return {
        type: CREATE_BUSINESS,
        payload: business
    }
}
export function createNewBusiness() {
    return async (dispatch) => {
        const business = await BusinnesService.createBusinessPerUser();
        debugger
        dispatch(setBusiness(business))
    }
}