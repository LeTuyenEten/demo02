import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Animated } from 'react-native';
import { Constants } from 'expo';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { GeocodeAction, WeatherAction, TokenAction } from '../../actions/headerAction';
const styles = StyleSheet.create({
  header: {
  	paddingTop:30,
  	paddingLeft:20,
  	paddingRight:20,
    paddingBottom:10,
    backgroundColor:'#162a45'
  },
  title:{
      color:"#c9a200",
      fontSize:30,
      fontWeight:'500',
      textShadowColor: '#000',
      textShadowOffset: { width: 1, height: 4 },
      textShadowRadius: 2
  },
  section:{
    paddingTop:10,
    flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  address:{
    fontSize:16,
    color:'#fff',
    paddingLeft:5,
    paddingRight:20
  },
  btnSearch:{
    backgroundColor:"#c9a200",
    borderRadius:20,
    paddingTop:5,
    paddingBottom:5,
    shadowColor: '#000',
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 10,
    shadowRadius: 9,
    marginBottom:15,
    marginTop:5
  },
  txtBtnSearch:{
    fontSize:15,
    textAlign:'center',
    color:'#162a45',
  },
  headerLine:{
    position:'absolute',
    bottom:0
  },
  line:{
    backgroundColor:'#000',
    height:7,
    width:'100%'
  }
});
 
@connect(
  state => ({
    geocode: state.geocodeReducer,
    weahter: state.weatherReducer,
    token: state.tokenReducer
  }),
  { GeocodeAction, WeatherAction, TokenAction },
)

class Header extends Component {
  constructor(props) {
      super(props);
      this.state = { checkToken: false };
  }
  

  componentDidMount() {
        navigator.geolocation.getCurrentPosition(() => {});
        this.watchId =   navigator.geolocation.watchPosition(
           (location) => {
            this.props.GeocodeAction({
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            });
            this.props.WeatherAction({
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            });
            if(this.props.token.token=='' && !this.state.checkToken){
              let dataLog = {
                location: location.coords.latitude+'-'+location.coords.longitude,
                address: this.props.geocode.address,
                weather: this.props.weahter.weather ,
                id: Constants.deviceId
              }
              this.props.TokenAction(dataLog);
              this.setState({checkToken:true});
            } 
              

         },
         (error) => this.setState({ error: error.message }),
         { enableHighAccuracy: true, timeout: 1000, maximumAge: 0, distanceFilter: 1},
       );
  }

  componentWillUnmount() {
      navigator.geolocation.clearWatch(this.watchId);
      
  }

  render() {
    let text = 'Loading...';
    let weather = 'Loading...';
    let temp = 'Loading...';
    let district = 'Loading...';
    let province = 'Loading...';
    let hours = new Date().getHours();
    let min = new Date().getMinutes();
    let {params} = this.props.state;
    if(hours<10){
      hours = '0'+hours;      
    }
    if(min<10){
      min = '0'+min;      
    }

    if (this.props.geocode.address !='' && this.props.weahter.weather !='') {
      let address = this.props.geocode.address;
      district = address[address.length-3].short_name;
      province = address[address.length-2].short_name;
      weather = this.props.weahter.weather;
      temp = Math.floor(parseInt(weather.temp) - 272.15);
    }
    if(hours>=0 && hours<=10){
      text='Bữa sáng';
    }else if(hours>=11 && hours<=13){
      text='Bữa trưa';
    }else if(hours>=14 && hours<=17){
        text='Bữa xế';
    }else if(hours>=18 && hours<=20){
      text= 'Bữa tối';
    }else if(hours>=21 && hours<=24){
      text= 'Ăn đêm';
    }
    
    return (
        <View style={{position:'relative'}}>
          <View style={styles.header}>
          <Text style={styles.title}>
              Welcome
          </Text>
          <Animated.View style={[{
            height:params!== undefined && params.changeHeight !== undefined && params.changeHeight !== ''? params.changeHeight : 70,
            opacity: params!== undefined && params.hideImgae !== undefined? params.hideImgae:1
          }]}
          >
            <View style={[styles.section]}>
              <Icon
                name='map-marker'
                type='font-awesome'
                size={20}
                color='#fff' />
              <Text style={styles.address}>
                {district} - {province}
              </Text>
            </View>
            <View style={[styles.section,{marginLeft:-3}]}>
              <Animated.Image
                style={{width: 30, height: 30,opacity: params!== undefined && params.hideImgae !== undefined? params.hideImgae:1}}
                source={{uri: 'http://openweathermap.org/img/w/'+weather.icon+'.png'}}
              />
              <Text style={styles.address}>
                {temp}{'\u2103'}
              </Text>
              <Icon
                name='clock-o'
                type='font-awesome'
                size={20}
                color='#fff' />
              <Text style={styles.address}> {text}</Text>
            </View>
          </Animated.View>
          <TouchableHighlight style={styles.btnSearch}  >
            <Text style={styles.txtBtnSearch} > Tìm món </Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.line,styles.headerLine]}>
        </View>
        </View>
    );
  }
}

export default Header;
