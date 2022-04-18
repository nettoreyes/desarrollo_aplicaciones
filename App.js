import { AppLoading } from 'expo-app-loading';
import ItemNavigation from './navigation/ItemNavigation';
import React from 'react';
import { useFonts } from 'expo-font';

export default function App() {

    const [loaded] = useFonts({
        Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
        RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
        GrapeNuts: require('./assets/fonts/GrapeNuts-Regular.ttf'),
      });
    

    // if (!loaded) return <AppLoading />

    return (         
      <ItemNavigation />
    );  
  
}
