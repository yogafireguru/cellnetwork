import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator,StyleSheet,SafeAreaView } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';


const MAX_RESULT = 50;
const PLAYLIST_ID1 = "PLnWdOVLCfIE814sEHpFv8cTlIgXjotksw";
const PLAYLIST_ID2 = "PL77CE8943362CB9B0";
const API_KEY = "AIzaSyBw2CAxb1cPiRaFKi2bd7_EBURL5KcpP3I";


class ChallengeScreen extends Component{

  
  static navigationOptions = {
    title: '66 Days Challenge',
  };

      constructor(props) {
        super(props);
    
        this.state = {
          loading: false,
          data: [],
          error: null,
        };
    
        this.arrayholder = [];
      }
    
      componentDidMount() {
        this.makeRemoteRequest();
      }
    
      makeRemoteRequest = () => {
        const url1 = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID1}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`;
        this.setState({ loading: true });
    
    
        fetch(url1)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: res['items'],
            error: res.error || null,
            loading: false,
          });
          this.arrayholder = res['items'];
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });

        const url2 = `https://www.googleapis.com/youtube/v3/playlistItems?playlistId=${PLAYLIST_ID2}&maxResults=${MAX_RESULT}&part=snippet%2CcontentDetails&key=${API_KEY}`;
        this.setState({ loading: true });
    
    
        fetch(url2)
        .then(res => res.json())
        .then(res => {
          this.setState({
            data: [...this.state.data,...res['items']],
            error: res.error || null,
            loading: false,
          });
          this.arrayholder = [...this.arrayholder,...res['items']];
        })
        .catch(error => {
          this.setState({ error, loading: false });
        });
    
        /*const url = `https://randomuser.me/api/?&results=20`;
        this.setState({ loading: true });
    
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: res.results,
              error: res.error || null,
              loading: false,
            });
            this.arrayholder = res.results;
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });*/
      };
    
      renderSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: '86%',
              backgroundColor: '#CED0CE',
              marginLeft: '14%',
            }}
          />
        );
      };
    
      searchFilterFunction = text => {
        this.setState({
          value: text,
        });
    
        const newData = this.arrayholder.filter(item => {
          const itemData = `${item.snippet.title.toUpperCase()}`;
          const textData = text.toUpperCase();
    
          return itemData.indexOf(textData) > -1;
        });
        
        this.setState({
          data: newData,
        });
      };
    
      renderHeader = () => {
        return (
          <SearchBar
            placeholder="Type Here..."
            lightTheme
            round
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
            value={this.state.value}
          />
        );
      };
    
      watchVideo(video_url){
        //console.log(video_url);
        this.props.navigation.navigate('video',{
          video_url:video_url
        });
      }
    
      render() {
        if (this.state.loading) {
          return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <ActivityIndicator />
            </View>
          );
        }
        return (
         <SafeAreaView style={styles.safeArea}>    
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => (
                <ListItem
                  leftAvatar={{ source: { uri: item.snippet.thumbnails.medium.url } }}
                  title={item.snippet.title}
                  subtitle={item.contentDetails.videoPublishedAt}
                  onPress={() => this.watchVideo(item.contentDetails.videoId)}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={this.renderSeparator}
              ListHeaderComponent={this.renderHeader}
            />
          </View>
          </SafeAreaView>
        );
      }

}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  demacate: {
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    borderRadius:10
  },
  item: {
    padding: 10,
    fontSize: 12,
    height: 44,
  },
});

export default ChallengeScreen;