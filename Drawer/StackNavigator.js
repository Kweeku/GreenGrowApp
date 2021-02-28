import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import NotificationScreen from '../Screens/Notifications';
import Settings from '../Screens/Settings';

const notificationHeader = createStackNavigator(
    {
        NotificationScreen: {
        screen: Notifications,
      },
    },
    {
      navigationOptions: {
        headerMode: 'screen',
      },
    }
  )