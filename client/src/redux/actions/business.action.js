////zvvvvvvv

import BusinnesService from "../../services/business.service";
export const ADD_CLICK_TO_BUSINESS="[business] ADD_CLICK_TO_BUSINESS"
export const SET_SELECTED_BUSINESS_DETAILS="[business] SET_SELECTED_BUSINESS_DETAILS"
export const CREATE_BUSINESS="[business] CREATE_BUSINESS"
export const SEND_MAIL="[business] SEND_MAIL"
export const GET_BUSINESS_By_ID="[business] GET_BUSINESS_By_ID"
export function setSelectedBusinessDetails(businessDetails){
    console.log(businessDetails)
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
export function addClicksToBusiness(businessId){
    debugger

    return async (dispatch) => {
        debugger
        const data = await BusinnesService.addClicksToBusiness(businessId);
        console.log(data,"   dataaaaaaaaaaa");
    }
    // return{
    //     type:ADD_CLICK_TO_BUSINESS,
    //     payload:businessId
    // }
}
export function setIdBusinessById(id) {
    debugger
    return {
        type: GET_BUSINESS_By_ID,
        payload:id
    }
}
export function getBusinessBybId(id) {
    return async (dispatch) => {
        const business = await BusinnesService.getBusiness(id);
        debugger
        dispatch(setSelectedBusinessDetails(business))
    }
}