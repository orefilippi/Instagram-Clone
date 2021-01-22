import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import Profile from './screens/Profile'
import Home from './screens/Home'
import Trends from './screens/Trends'


const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => (

  <Tab.Navigator tabBarPosition={'bottom'} tabBarOptions={{style:{display:'none'}}}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Trends" component={Trends} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>
  
)




export default function App() {

  return (

    <NavigationContainer>

      <TabNavigator></TabNavigator>

    </NavigationContainer>
      
    

  );

}


