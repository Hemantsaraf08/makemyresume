import * as actionTypes from './actionTypes';
//contact section is an object containing all contact details like name, professional summary etc
export const add=(contactSection)=>{
    //instead of payload word we refer it as contactSection
    return {type:actionTypes.ADD_CONTACT,contactSection:contactSection}
}

export const update = (contactSection)=>{
    return {type:actionTypes.UPDATE_CONTACT,contactSection:contactSection}
}