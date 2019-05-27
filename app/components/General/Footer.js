import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
var {height, width} = Dimensions.get('window');
import { connect } from 'react-redux';
const styles = StyleSheet.create({
   viewIcon:{
      width: (width-70)/2,
      backgroundColor:'#c9a200',justifyContent: 'center',
      alignItems: 'center'
   },
   viewCenter:{
    width:'20%',position:'relative',backgroundColor:'#c9a200'
   },
   viewScanqr:{
    width:70,
    height:'250%',
    top:-20,
    paddingTop:10,
    backgroundColor:'#c9a200',
    borderRadius:100,
    alignItems: 'center'
   },
   imageScan:{
    width:45,height:45
   }
});

@connect(
  state => ({
    geocode: state.geocodeReducer, 
  })
)

export default class Footer extends Component {
  
  render() {
    return (
        <View style={{flexDirection: 'row',height:40}} >
           <View style={styles.viewIcon}  >
                <Icon
                name='user-circle-o'
                type='font-awesome'
                size={30}
                color='#162a45' /></View>
           <View style={styles.viewCenter} >
        <View style={styles.viewScanqr}>
            <Image style={styles.imageScan} source={require('../../../assets/scanqr.png')} />
        </View>
      </View>
           <View style={styles.viewIcon} >
            <Icon
                    name='bell-o'
                    type='font-awesome'
                    size={30}
                    color='#162a45' />
          </View>
        </View>
    );
  }
}
