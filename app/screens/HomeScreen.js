import React from "react";
import { StyleSheet, View, ScrollView, Animated } from "react-native";

import AnimateView from '../components/AnimateScreen';

import Recommendation from '../components/partner/Recommendation';
import ListCategory from '../components/product/ListCategory';
import Listpartner from '../components/partner/ListPartner';
import Footer from '../components/General/Footer';

const styles = StyleSheet.create({
  container: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  fullscreen: {
    backgroundColor: '#162a45',
    paddingTop:15
  },
  line:{
    backgroundColor:'#000',
    marginTop:10,
    marginBottom:10,
    height:7
  }
});


class HomeScreen extends React.Component {

  componentDidMount(){
    this.scrollY = new Animated.Value(0);
    this.changeHeight = this.scrollY.interpolate({
        inputRange: [0, 70],
        outputRange: [70, 0],
        extrapolate:'clamp'
    });
    this.hideImage = this.scrollY.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate:'clamp'
  });
    this.props.navigation.setParams({
      changeHeight: this.changeHeight,
      hideImgae: this.hideImage
    });
  }
   
  render() {
    return (
          <AnimateView style={{flex: 1}}>
                <ScrollView 
                  style={styles.fullscreen} 
                  contentContainerStyle={styles.contentContainer}
                  scrollEventThrottle={0.1}
                  onScroll={Animated.event([{
                    nativeEvent:{
                      contentOffset:{
                        y:this.scrollY                  
                      }
                    }
                  }])}
              >
                  <Recommendation />
                  <View style={styles.line}>
                  </View>
                  <ListCategory />
                  <View style={styles.line}>
                  </View>
                  <Listpartner />
              </ScrollView>
              <Footer />
          </AnimateView>
    );
  }
}
export default HomeScreen;