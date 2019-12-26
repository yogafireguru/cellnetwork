import * as actionTypes from '../actions/types';


const initialUserState = {
    currentUser:null
};

const mapReducer = (state=initialUserState, action) =>{
    switch(action.type){
        case actionTypes.GET_LOCATION_LISTENER:
            return {...state,currentUser:action.payload.data,isFetching:action.payload.isFetching}   
        case actionTypes.STOP_LOCATION_LISTENER:
            return {...state,isFetching:action.payload.isFetching};
        default:
            return {...state,isFetching:true};
    }
};

export default mapReducer;