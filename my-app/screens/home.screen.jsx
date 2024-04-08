import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ImagesExample from '../components/image_example';

import Button from '../components/button.component';

buttonPress = () => {
  navigation.navigate('Details');
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        style = {styles.iconImage}
        source={require('../assets/nana.jpeg')}
        />
      <Image 
        style = {styles.meduiumImage}
        source={require('../assets/small-pirate.jpg')}
        />
      <Text>HOME DOME</Text>
      <Button
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
        style={styles.button}
      />
      <Button
        title='Click Me!'
        onPress={() => console.log('Button Pressed!')}
        style={styles.button}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    /*justifyContent: 'center',*/
  },
  button: {
    backgroundColor: '#00bfff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  mediumImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    left: 500
  },
  iconImage:{
    width: 50,
    height: 50,
    resizeMode: 'contain',
    //top: 8,
    left: 16,
    //justifyContent: 'flex-start',
  }
});

export default HomeScreen;