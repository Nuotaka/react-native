import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  state = {
    pageNumber:1
  }
  render() {

    const { pageNumber } = this.state
    const colors = [
      '#99ffff',
      '#ffff80',
      '#df80ff',
      '#80ff80',
    ]
    const elements = Array(48).fill().map((item, i, arr)=>
    <Image
      key={i}
      style={{
        width: `${100 / 3}%`, 
        height: `${100 / 4}%`,
        borderColor:colors[Math.floor(i / 12)],
        borderWidth:2
      }}
      source={{uri: 'https://ravishly-9ac9.kxcdn.com/sites/default/files/maxresdefault_2.jpg'}}

    />
    )
    return (
      <View style={styles.container}>
        <Text style={styles.heading} >Kitten App!</Text>
        <View style={styles.photoContainer}>
          {elements.filter((Item, i)=>
            Math.ceil((i + 1) / 12) >= pageNumber && Math.ceil((i + 1) / 12) < pageNumber + 1 &&<Item key={i}/>
          )}
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
    paddingTop: 100,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  heading:{
    marginBottom: 20,
    fontSize: 24,
    color: '#fff'
  },
  photoContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    borderColor: '#FFF',
    borderWidth: 2,
    borderStyle: 'solid',
    width: '100%',
    height:'100%',
    overflow:'hidden'
  }
});