import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { fromLeft, fadeIn } from 'react-navigation-transitions';
import Header from '../components/General/Header';
import Loading from '../screens/Loading';
import HomeScreen from '../screens/HomeScreen';

export const AppNavigator = createStackNavigator(
	{
		Loading:{
			screen: Loading
		},
		HomeScreen:{
			screen: HomeScreen,
			headerStyle: {
				backgroundColor: '#162a45',
			  },
			navigationOptions:({navigation, screenProps })=>{
				return {
					header: <Header  {...navigation} {...screenProps} />
				}
			}
		}
	},{
	    initialRouteName: 'Loading',
	    transitionConfig: () => fadeIn(),
	}
	,{
	    initialRouteName: 'HomeScreen',
	    transitionConfig: () => fadeIn(),
	}
)

