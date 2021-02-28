import React from 'react';
import { Button, View, ScrollView, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import DrawerStyles from './Styles/DrawerStyles';
import DrawerImage from './Drawer/DrawerImage';
import MenuNavigator from './Drawer/DrawerNavigator';


function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={navigation.openDrawer}
        title="Open navigation drawer"
      />
      <Button
        onPress={() => navigation.goBack()}
        title="Go back home"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <ScrollView>
      {/* <Image testID="drawerLogo" source={DrawerImage} style={DrawerStyles.drawer} /> */}
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </ScrollView>
  );
}

