import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import About from '../screens/About';
import Posts from '../screens/Posts';
import PostDetails from '../screens/PostDetails';

const Tab = createMaterialBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={Posts}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="post" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="PostDetails" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
