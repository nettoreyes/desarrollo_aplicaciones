import Colores from '../constants/colores';
import EditarItemTemporal from '../components/EditarItemTemporal';
import Index from '../components/List/Index';
import { Platform } from 'react-native';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ItemStackNavigation = () => {
    return (
        
            <Stack.Navigator initialRouteName="Home" 
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? Colores.fondoCabecera : '',                    
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : Colores.fondoCabecera,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name="Home" component={ Index }  />
                <Stack.Screen 
                name="Editar" 
                component={EditarItemTemporal} 
                options={({route}) => ({ title: route.params.value })} />
            </Stack.Navigator>
        
    );
}

export default ItemStackNavigation