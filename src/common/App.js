import React from 'react';
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import { NativeBaseProvider } from "native-base";
import Nav from '../component/Layout/Header/Nav';
import Footer from '../component/Layout/Footer/Footer';
import Movies from '../component/Pages/Movies/Movies';
import Series from '../component/Pages/series/Series';
import Home from '../component/Pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { width, height } = Dimensions.get('window')
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Provider store={store} >
          <SafeAreaView style={styles.parentContainer} >
            <Nav />
            <Stack.Navigator>
              <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
              <Stack.Screen name='Movies' component={Movies} options={{ headerShown: false }} />
              <Stack.Screen name='Series' component={Series} options={{ headerShown: false }} />
            </Stack.Navigator>
            <Footer />
          </SafeAreaView>
        </Provider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    width: width,
    height: height,
  }
})

export default App;
