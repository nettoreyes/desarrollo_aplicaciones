import {Alert, Button, Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import Colores from '../constants/colores';
import ImageSelector from './ImageSelector';
import { modificaPersona } from '../store/actions/persona.action';

const EditarItemTemporal = ({navigation, route}) => { 

  const itemSelected = useSelector(state => state.personas.seleccionada);
  const dispatch = useDispatch();
  const [textItem, setTextItem] = useState(itemSelected.value);  
  const [image, setImage] = useState(itemSelected.imagen);


  const onHandlerChangueItem = ( texto ) => {
    setTextItem(texto);    
  }

  const modificaItems = () => {  
    const personaEditada = {
      id: itemSelected.id,
      value: textItem,
      imagen: image
    }
    dispatch(modificaPersona( personaEditada ));
    setTextItem('');      
    Keyboard.dismiss();
    navigation.navigate('Home')
  }


  return (   
    <View style={styles.container}>
            <Text style={ styles.titulo }>Editar Personas</Text>
            <View style={styles.addItemContainer}>       
              <ImageSelector setImage={setImage} imagenPersona={image} />
              <TextInput placeholder="Ingrese un item a Editar" style={styles.textInput} value={ textItem } onChangeText={ onHandlerChangueItem } ></TextInput>              
              <View style={ styles.containerBotones }>
                  <Button title="Modificar "  onPress={ modificaItems }  />
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