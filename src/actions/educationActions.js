import * as actionTypes from './actionTypes';
//education section is an object 
export const add=(educationSection)=>{
    //instead of payload word we refer it as educationSection
    return {type:actionTypes.ADD_EDUCATION,educationSection:educationSection}
}

export const update = (educationSection)=>{
    return {type:actionTypes.UPDATE_EDUCATION,educationSection:educationSection}
}