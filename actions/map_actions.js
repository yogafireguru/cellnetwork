import firebase from '../firebase';
import * as actionTypes from './types';
import { AsyncStorage } from 'react-native';


export const updateLocation = (mylocation) =>async dispatch =>{

  
    let usersRef = firebase.database().ref('users'); 

    let token = await AsyncStorage.getItem('email_token');

    usersRef.child(token).update({
        latitude:mylocation.latitude,
        longitude:mylocation.longitude
    }).then(()=>{
        dispatch ({
            type:actionTypes.SET_LOCATION,
            payload:"Location Set For User"
        });  
    });
    
}


export const getLocationStartListener = () =>  async dispatch  =>{

    let token = await AsyncStorage.getItem('email_token');

    firebase.database().ref("/users/" + token).once('value').then(
        function(snap) {
            dispatch ({
                type:actionTypes.GET_LOCATION_LISTENER,
                payload:{data:snap.val(),isFetching:false}
            }); 
        }
    );

}

export const getLocationStopListener = () =>  async dispatch  =>{

    dispatch ({
        type:actionTypes.STOP_LOCATION_LISTENER,
        payload:{isFetching:false}
    }); 

}