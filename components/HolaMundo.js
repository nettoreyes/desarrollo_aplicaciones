import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import React from 'react'

const HolaMundo = ({navigation}) => {
  return (
    <View >
        <Text>Hol Mundo</Text>
        <Button title="Ir a Chao" onPress={() => navigation.navigate('Chao')}/>
    </View>
  )
}

export default HolaMundo