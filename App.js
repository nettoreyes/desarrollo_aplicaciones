import  AppLoading  from 'expo-app-loading';
import ItemNavigation from './navigation/ItemNavigation';
import { Provider } from 'react-redux';
import React from 'react';
import { init } from './db';
import store from './store';
import { useFonts } from 'expo-font';

init()
.then(() => console.log('DB inicializada'))
.catch((err) => {
  console.log('Error al inicializar DB')
  console.log(err.message)
});

export default function App() {

    const [loaded] = useFonts({
        Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
        GrapeNuts: require('./assets/fonts/GrapeNuts-Regular.ttf')
      });
    

    if (!loaded) return (
      <AppLoading />
    );

    return (   
      <Provider store={store}>
        <ItemNavigation />
      </Provider>
    );  
  
}
