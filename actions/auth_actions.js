
import { AsyncStorage } from 'react-native';
import firebase from '../firebase';
import md5 from 'md5';
import * as actionTypes from './types';

export const signInEmail = (userProfile) =>async dispatch =>{

    let token = await AsyncStorage.getItem('email_token');

    if(token)
    {
        dispatch ({
            type:actionTypes.SIGN_IN_EMAIL,
            payload:token
           });  
    }
    else { 
    let signedInUser=  await firebase
        .auth()
        .signInWithEmailAndPassword(userProfile.email, userProfile.password);
    
    await AsyncStorage.setItem('email_token',signedInUser.user.uid);

    dispatch ({
        type:actionTypes.SIGN_IN_EMAIL,
        payload:signedInUser.user.displayName
       });  

    }
    
}

export const createUserWithEmailPassword = (createUser) =>  async dispatch  => {


    let token = await AsyncStorage.getItem('email_token');

    if(token)
    {
        dispatch ({
            type:actionTypes.CREATE_USER_EMAIL_PASSWORD,
            payload:token
           });  
    }
    else{

    let usersRef = firebase.database().ref('users'); 
    await firebase
        .auth()
        .createUserWithEmailAndPassword(createUser.email,createUser.password)
        .then(createdUser =>{
                createdUser.user.updateProfile({
                    displayName:createUser.username,
                    photoURL:`http://gravatar.com/avatar/${md5(createdUser.user.email)}d=identicon`
                })
                usersRef.child(createdUser.user.uid).set({
                    name:createUser.username,
                    avatar:`http://gravatar.com/avatar/${md5(createUser.email)}d=identicon`
                })
        }).then(()=>{
            dispatch ({
                type:actionTypes.CREATE_USER_EMAIL_PASSWORD,
                payload:"User Created"
            });  
        });
    }
        

};
