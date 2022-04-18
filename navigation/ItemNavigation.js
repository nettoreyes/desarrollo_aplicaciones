import EditarItemTemporal from '../components/EditarItemTemporal';
import Index from '../components/List/Index';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ItemNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={ Index } />
                <Stack.Screen name="Editar" component={EditarItemTemporal} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default ItemNavigation