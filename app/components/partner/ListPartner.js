import React, {Component} from "react";
import { StyleSheet, View, Text, ScrollView, Image, AsyncStorage } from "react-native";
import { connect } from 'react-redux';
import { partnerAction} from '../../actions/partnerAction';
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
      width:'100%',
      marginRight:20,
      marginBottom:20
    },
    itemImage:{
      position: 'relative',
      height:220,
      
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
      fontSize:18,
      paddingTop:5,
    },
    address:{
      fontSize:15,
      color:'#565656',
      paddingTop:5
    }
})



@connect(
  state => ({
    token: state.tokenReducer.token,
    partner: state.partnerReducer
  }),
  {
    partnerAction
  }
)


class ListPartner extends Component {
  constructor(props) {
      super(props);
      this.state = {check:true,dataList: []}
  }
  componentDidMount(){
   
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.partner.dataList && this.props.partner.dataList.length == 0 && this.state.check ){
      this.setState({check : false});
      this.props.partnerAction({token:nextProps.token,condition:{focus:'1'}});
    }
    
  }
  render() {
    if(this.props.partner.dataList && this.props.partner.dataList.length > 0){
      this.state.dataList = this.props.partner.dataList;
    }
    return (
        <View style={styles.recommen}>
          <Text style={styles.title}>Địa điểm gần đây</Text>
            <ScrollView contentContainerStyle={styles.contentContainer}>
              <View style={[styles.section,styles.list]} >
              {this.state.dataList.map((r) => (
                <View key={r._id} style={styles.item}>
                  <View style={styles.itemImage}>
                  <Image style={styles.image} source={{uri:r.image}}/>
                  </View>
                  <Text style={styles.name}>{r.name} </Text>
                  <Text style={styles.address}>{r.address}</Text>
                </View>
              ))}
              </View>
            </ScrollView>
        </View>
    );
  }
}
export default ListPartner;