import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import WorkThrough from '../components/UI';
import { AsyncStorage } from 'react-native';
import {AppLoading} from 'expo';


export const icons = {
    "bell.png" : require('../assets/images/bell.png'),
    "home.png" : require('../assets/images/home.png'),
    "plane.png" : require('../assets/images/plane.png'),
    "educate.png" : require('../assets/images/educate.png'),
    "react-native.png" : require('../assets/images/react-native.png')
};

// example data
const flowData = {
    bgColor: "#788eec", 
    fgColor: "white", 
    screens:
    [
        {icon: "react-native.png", title: "Welcome", description: "To The GLobal Cell Network"},
        {icon: "home.png", title: "Set Your Geo Location", description: "To Deep Dive Into UN SDGs"},
        {icon: "educate.png", title: "Educate Yourself", description: "By Joining 66 Days Habit Installation Global Challenge"},
    ]
}

export default class TutorialScreen extends Component {

    state = {token:null}

    async componentWillMount(){
        StatusBar.setHidden(true);

        AsyncStorage.removeItem('email_token');
        let token = await AsyncStorage.getItem('email_token');
        //console.log(token);
        if(token){
            this.props.navigation.navigate('auth');
            this.setState({token:true});
        }
        else{
            this.setState({token:false});
        }
    }

    _onWorkFlowFinished = () => {
        this.props.navigation.navigate('auth');
    }
    render() {
        if(this.state.token==null){
            return <AppLoading />
        }
        return (
            <View style={styles.container}>
                <WorkThrough
                    iconpackage = {icons}
                    data={flowData}
                    onFinished = {this._onWorkFlowFinished}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    }
});
