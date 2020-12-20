

import BusinnesService from "../../services/business.service";
export const SET_SELECTED_BUSINESS_DETAILS="[business] SET_SELECTED_BUSINESS_DETAILS"
export const CREATE_BUSINESS="[business] CREATE_BUSINESS"
export const SEND_MAIL="[business] SEND_MAIL"
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
export function setContact(contact) {
    debugger
    return {
        type: SEND_MAIL,
        payload: contact
    }
}
export function sendMailTOContact(c) {
    return async (dispatch) => {
        const contact = await BusinnesService.sendMail(c);
        debugger
        dispatch(setContact(contact))
    }
}