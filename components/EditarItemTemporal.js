import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import React from 'react'

const EditarItemTemporal = ({navigation}) => {
  return (
    <View >
        <Text>Modulo editar temporal</Text>
        <Button title="Ir a Home" onPress={() => navigation.navigate('Home')}/>
    </View>
  )
}

export default EditarItemTemporal