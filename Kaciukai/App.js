import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pavadinimas}>Kačiukų galerija</Text>
        <View style={styles.nuotraukos}>
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/01.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/02.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/03.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/04.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/05.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/06.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/07.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/08.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/09.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/010.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/011.jpg')} />
          <Image 
          style={{width: `${100/3}%`, height: `${100/4}%`}}
          source={require('./images/012.jpg')} />

          
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pavadinimas: {
    color: 'white',
    fontSize: 40,
  },
  nuotraukos: {
    height: 450,
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflow: 'hidden',
    padding: 5,
    marginTop: 20,
  },
});
