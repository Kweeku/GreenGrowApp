import React, { useContext } from 'react';
import { SafeAreaView, FlatList, StyleSheet, View } from 'react-native';
import { CustomText } from '../../CommonComponent';
import CommonStyle from '../../../Theme/CommonStyle';
import { AppContext } from '../../../AppContext';
import ItemHomeRow from './ItemHome';

const Home = (props) => {
  const { appTheme } = useContext(AppContext);

  const DATA = [
    {
      title: 'Tomato',
      sensorVals: { Temperature: 22, Humidity: 55, Water: 23, Light: 10000 }
    },
    {
      title: 'Lettuce',
      sensorVals: { Temperature: 21, Humidity: 75, Water: 50, Light: 8000 }
    },
    {
      title: 'Cabbage',
      sensorVals: { Temperature: 23, Humidity: 35, Water: 33, Light: 11000 }
    },
    {
      title: 'Maize',
      sensorVals: { Temperature: 23.5, Humidity: 65, Water: 50, Light: 7700 }
    },
    {
      title: 'Cassava',
      sensorVals: { Temperature: 21.5, Humidity: 80, Water: 53, Light: 9700 }
    },
    {
      title: 'Grapes',
      sensorVals: { Temperature: 25, Humidity: 14, Water: 23, Light: 1500 }
    },
  ];

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        { backgroundColor: '#009387' },
      ]}>
      <View style={styles.header}>
        <CustomText xxlarge style={[styles.text_header]}>
          Liberty Farms
      </CustomText>
      </View>
      <FlatList
        data={DATA}
        extraData={DATA}
        // numColumns={2}
        showsVerticalScrollIndicator={false}
        // ListEmptyComponent={this.renderEmptyReceipts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <ItemHomeRow data={item} />}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    // justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 70,
    paddingTop: 30,
    // backgroundColor: '#009387'
  },
  text_header: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30
  },
})