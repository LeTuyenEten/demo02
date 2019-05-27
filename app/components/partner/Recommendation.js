import React from "react";
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from "react-native";
//import {getRestaurant} from '../../functions/db';


var {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    recommen:{
      paddingLeft:20,
      paddingRight:20
    },
    section:{
      paddingTop:10,
      flexWrap: 'wrap', 
      alignItems: 'flex-start',
      flexDirection:'row',
    },
    title:{
        color:"#c9a200",
        fontSize:23,
        fontWeight:'500',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 3
    },
    item:{
      width:width/3,
      marginRight:20
    },
    itemImage:{
      position: 'relative',
      height:120
    },
    image:{
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    name:{
      color:"#c9a200",
      fontSize:15,
      paddingTop:5,
    },
    address:{
      fontSize:13,
      color:'#565656',
      paddingTop:5
    }
})


class Recommendation extends React.Component {
  state = {
  };
  // componentWillMount() {
  //     this._getRestaurant();
     
  // }
  // _getRestaurant = async ()=>{
  //   // let dataList = await getRestaurant()
  //   //               .then(result=>{
  //   //                 return result.data;
  //   //               })
  //   //               .catch(err=>{
  //   //                 console.log(err)
  //   //               });
  //   // this.setState({ dataList: dataList });
  //   //console.log(dataList);
  // }
  render() {
    let dataList = [];
    if (this.state.dataList) {
        dataList = this.state.dataList;
    }
    return (
        <View style={styles.recommen}>
          <Text style={styles.title}>Địa điểm nổi bật</Text>
            <ScrollView contentContainerStyle={styles.contentContainer} horizontal={true}>
              <View style={[styles.section,styles.list]} >
              {dataList.map((r) => (
                <View key={r.id} style={styles.item}>
                  <View style={styles.itemImage}>
                  <Image style={styles.image} source={{uri:r.avatar}}/>
                  </View>
                  <Text style={styles.name}>{r.last_name} {r.first_name}</Text>
                  <Text style={styles.address}>{r.last_name} {r.first_name}</Text>
                </View>
              ))}
              </View>
            </ScrollView>
        </View>
    );
  }
}
export default Recommendation;