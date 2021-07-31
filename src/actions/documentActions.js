import * as actionTypes from './actionTypes';

//here skinCd is the id of template chosen by the user

export const setSkinCd=(skinCd)=>{
    let id=uuidv4();
    return {
        type: actionTypes.SET_SKIN, 
        document:{
            id: id, 
            skinCd: skinCd
        }
    }
}

export const updateSkinCd = (skinCd)=>{
    return {type:actionTypes.UPDATE_SKIN,document:{ skinCd:skinCd}}
}