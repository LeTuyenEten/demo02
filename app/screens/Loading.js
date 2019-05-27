import React from "react";
import {Animated,  StyleSheet, View, TouchableOpacity, Dimensions, Image, Text } from "react-native";
import AnimateView from '../components/AnimateScreen';

var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  fullscreen: {
    backgroundColor: '#162a45',
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
    position:'relative'
  },
  wellcome:{
    fontSize:40,
    color:'#c9a200',
    fontWeight:'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 2,
    paddingBottom:10
  },
  started:{
    fontSize:30,
    color:'#c9a200',
    fontWeight:'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 4 },
    textShadowRadius: 2,
    paddingBottom:10
  },
  viewCopyRight:{
    position:'absolute',
    bottom:0,
    alignItems: "center",
    justifyContent: "center",
  },
  imageCopyRight:{
    width:70,
    height:30
  },
  textCopyRight:{
    color:'#c9a200'
  }
});

class Loading extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View >
        <AnimateView >
          <TouchableOpacity activeOpacity={1} onPress={()=>this.props.navigation.navigate('HomeScreen')} >
            <View style={styles.fullscreen}>
              <Text style={styles.wellcome}>Wellcome</Text>
              <Text style={styles.started}>Lest get started</Text>
              <View style={styles.viewCopyRight}>
                <Image style={styles.imageCopyRight} source={require('../../assets/logo.png')} />
                <Text style={styles.textCopyRight}>All right reserved</Text>
              </View>
            </View>
          </TouchableOpacity>
        </AnimateView>
      </View>
    );
  }
}
export default Loading;