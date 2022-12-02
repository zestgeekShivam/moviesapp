import React from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


const windowWidth = Dimensions.get('window').width;
const Nav = () => {
  const navigation = useNavigation();
  const value = useSelector(state => state.nav);


  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title} onPress={() => { navigation.navigate('Home') }} > DEMO Streaming </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title2}> Popular {value} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 40,
    backgroundColor: '#3867d6',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container2: {
    width: windowWidth,
    height: 30,
    backgroundColor: '#636e72',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10
  },
  btnGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%',
  },

});

export default Nav;
