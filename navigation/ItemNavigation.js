import { StyleSheet, View } from 'react-native';

import EditarItemTemporal from '../components/EditarItemTemporal';
import Index from '../components/List/Index';
import { Ionicons } from '@expo/vector-icons';
import ItemStackNavigation from './ItemStackNavigation';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();


const ItemNavigation = () => {
    return (
        <NavigationContainer>
            
            <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabbBarStyle: styles.tabBar,
            }}
            initialRouteName="Home"
            >
                <BottomTabs.Screen 
                    name="Home" 
                    component={ ItemStackNavigation }  
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <View style={styles.item}>
                                <Ionicons name='md-home' size={24} color='black' />
                            </View>
                        )
                    }}    
                    />                    
            </BottomTabs.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({   
    tabBar: {
        shadowColor: '#7f5df0',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.25,
        shadowRadius: 0.25,
        elevation: 5,
        position: 'absolute',
        bottom: 25,
        left:20,
        right:20,
        borderRadius: 15,
        height: 90,
    },
    item:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
  });
export default ItemNavigation