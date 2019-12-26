import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';


//import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import UNSDGScreen from '../screens/UNSDGScreen';
import ChallengeScreen from '../screens/ChallengeScreen';
import CellNetwork from '../screens/CellNetwork';
import Authentication from '../screens/Authentication';
import WatchVideo from '../screens/VideoScreen';
import TutorialScreen from '../screens/TutorialScreen';


import Icon from 'react-native-vector-icons/MaterialIcons';


const challenge = createStackNavigator({
  ce:{screen:ChallengeScreen},
  video:{screen:WatchVideo}
});

challenge.navigationOptions = {
  tabBarIcon: ({ tintColor }) => <Icon
            name={'ondemand-video'}
            size={20}
            color={tintColor}
  />
};

export default MainNavigation = createAppContainer(
  
  createBottomTabNavigator(
    {
      welcome:TutorialScreen,
      auth:Authentication,
      main:{
          screen:createBottomTabNavigator({
            cell:{screen:MapScreen}, 
            unsdg:{screen:UNSDGScreen},
            //unsdg:{screen:Articles},
            "66DaysChallenge":{screen:challenge},
            //cellnetwork:{screen:CellNetwork},
          })
      }
    },
    {
      /* Other configuration remains unchanged */
      lazy:true,
      defaultNavigationOptions: {
        tabBarVisible:false
      }
    }
  )
);
