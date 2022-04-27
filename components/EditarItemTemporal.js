import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Colores from '../constants/colores';
import React from 'react'

const EditarItemTemporal = ({navigation, route}) => {
  // let itemSelected = route.params;

  const itemSelected = useSelector(state => state.personas.seleccionada);


  return (   
    <View style={styles.container}>
            <Text style={ styles.titulo }>Editar Personas</Text>
            <View style={styles.addItemContainer}>          
                <TextInput placeholder="Ingrese un item a Editar" style={styles.textInput} value={ itemSelected.value } ></TextInput>
                <View style={ styles.containerBotones }>
                    <Button title="Modificar (pendiente)"   />
                    <Button title="Cancelar" color={'red'} onPress={() => navigation.navigate('Home')}  />
                </View>
            </View>
            
      </View>
  )
};

const styles = StyleSheet.create({   
  container: {
      backgroundColor: Colores.fondoAPP,
      flex: 1,
      alignItems: 'center',        
      justifyContent: 'center',
  },
  addItemContainer: {            
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',        
      backgroundColor: Colores.fondoContainer,
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 10,
      width: '90%',
      borderRadius: 10,
  },
  containerBotones: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      width: '100%'
  },
  textInput: {
    borderColor: '#D7DBDD',
    borderWidth:1,
    borderRadius:8,
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width:0, height: 5 },
    shadowOpacity: 0.36,
    textShadowRadius: 6.68,
    elevation:11
  },
  titulo: {     
      fontFamily: 'GrapeNuts',   
      color:'white',
      fontSize: 32,        
      marginBottom:10,
      borderRadius: 10         
    }  
});

export default EditarItemTemporal