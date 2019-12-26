import React from 'react';
import { View, Dimensions,StyleSheet,Alert,ActivityIndicator } from 'react-native';
import  MapView, { Marker }  from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import  {updateLocation,getLocationStartListener,getLocationStopListener} from '../actions';
import { connect } from 'react-redux';



class MapScreen extends React.Component{


  static navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
      <Icon
        name={'home'}
        size={20}
        style={{ color: tintColor }}
      />
    )
  }

    state={
        region:{
            longitude:null,
            latitude:null,
            longitudeDelta:0.04,
            latitudeDelta:0.09
        },
        error:''
    }

    async componentDidMount(){
        await this.getLocationHandler();
        this.props.getLocationStartListener();
        this.props.getLocationStopListener();
    }

    componentWillUnmount(){
      this.props.getLocationStopListener();
    }

    async componentDidUpdate(prevProps) {
    

      if((this.props.currentUser!== prevProps.currentUser))
      {
        
        this.props.getLocationStopListener();
  
        this.setState({
          region:{
            longitude: this.props.currentUser.longitude,
            latitude: this.props.currentUser.latitude,
            longitudeDelta:0.04,
            latitudeDelta:0.09
          }
        });  



      }
    }
  
    getLocationHandler = async () => {
        const hasPermission = await this.verifyPermissions();
        if (!hasPermission) {
          return;
        }
    
        try {
          const location = await Location.getCurrentPositionAsync();
          this.setState({
              region:{
                longitude: location.coords.longitude,
                latitude: location.coords.latitude,
                longitudeDelta:0.04,
                latitudeDelta:0.09
              }
          });
        } catch (err) {
          Alert.alert(
            'Could not fetch location!',
            'Please try again later or pick a location on the map.',
            [{ text: 'Okay' }]
          );
        }
    };
    
    verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.LOCATION);
        if (result.status !== 'granted') {
          Alert.alert(
            'Insufficient permissions!',
            'You need to grant location permissions to use this app.',
            [{ text: 'Okay' }]
          );
          return false;
        }
        return true;
      };

      coordinates(){
        let markerCoordinates=null;
      
        markerCoordinates = {
            longitude: this.state.region.longitude,
            latitude: this.state.region.latitude
          };
          //console.log(markerCoordinates);
          return markerCoordinates;
      }

      selectLocationHandler = async(event) => {

        try {
          let userInfo = {
            longitude:event.nativeEvent.coordinate.longitude,
            latitude:event.nativeEvent.coordinate.latitude
           };
          await this.props.updateLocation(userInfo);
          await this.props.getLocationStartListener();
          this.setState({error:''});
          Alert.alert('Location Updated', '', [{ text: 'Okay' }]);
        } catch (err) {
          this.setState({error:err});
          Alert.alert('An Error Occurred!', err.message, [{ text: 'Okay' }]);
        }
       
      
      };

     render(){
         return(
            <View style={styles.container}>

            {
                this.props.isFetching ? (
                    <ActivityIndicator size="large" color={Colors.primary} />) 
                    : 
                    (
                            <MapView style={styles.mapStyle} region={this.state.region} onPress={this.selectLocationHandler}>
                               <Marker title="Cell Location" coordinate={this.coordinates()} />
                            </MapView>
                    )
            }
                
             </View>
         );
     }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    mapStyle: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });

  const mapStateToProps = (state) =>{
    return {currentUser:state.user.currentUser,isFetching:state.user.isFetching}
  }

  export default connect(mapStateToProps,{updateLocation,getLocationStartListener,getLocationStopListener})(MapScreen);