import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
//import {getRestaurant} from '../../functions/db';
import { connect } from 'react-redux';

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
      marginLeft:-5,
      marginRight:-5
    },
    title:{
        color:"#c9a200",
        fontSize:23,
        fontWeight:'500',
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 4 },
        textShadowRadius: 3
    },
    name:{
      color:"#c9a200",
      fontSize:15,
      paddingTop:5,
      textShadowColor: '#000',
      textShadowOffset: { width: 1, height: 3 },
      textShadowRadius: 1,
    },
    item:{
      flex:1,
      height:100,
      position:'relative',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft:5,
      paddingRight:5
    },
    image:{
      width:'100%',
      height:'100%',
      position:'absolute',
      zIndex:-1
    },
    overlay:{
      width:'100%',
      height:'100%',
      backgroundColor: 'rgba(6, 6, 6, 0.47058823529411764)',
      position:'absolute',
      zIndex:-1
    }
})


class ListCategory extends React.Component {
  constructor(props) {
      super(props);
  }
  state = {
  };
  // componentWillMount() {
  //     this._getRestaurant();
  //     const {token} = this.props;
  //     // console.log(1);
  //     // console.log(token);
  //     // console.log(1);
  // }
  // _getRestaurant = async ()=>{
  //   let dataList = await getRestaurant()
  //                 .then(result=>{
  //                   return result.data;
  //                 })
  //                 .catch(err=>{
  //                   console.log(err)
  //                 });
  //   this.setState({ dataList: dataList });
  //   //console.log(dataList);
  // }
  render() {
    let dataList = [];
    if (this.state.dataList) {
        dataList = this.state.dataList;
    }
    return (
        <View style={styles.recommen}>
          <Text style={styles.title}>Danh mục</Text>
          <View style={styles.section}>
            {dataList.map((r) => (
                <View key={r.id} style={styles.item}>
                  <Image source={{uri:r.avatar}} style={styles.image} />
                  <Text style={styles.name}>{r.last_name} {r.first_name}</Text>
                  <View style={styles.overlay}></View>
                </View>
              ))} 
          </View>
        </View>
    );
  }
}
const mapStateToProps = state => {
  return {
      token: state.token
  }
}
const ListCategoryab = connect(mapStateToProps, null)(ListCategory);
export default ListCategoryab;