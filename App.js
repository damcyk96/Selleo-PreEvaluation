import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}
