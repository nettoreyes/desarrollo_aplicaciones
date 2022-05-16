import { FlatList, Keyboard, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {cargaPersonas, eliminaPersona, guardarPersona, seleccionarPersona} from '../../store/actions/persona.action';
import { useDispatch, useSelector } from 'react-redux';

import AddItem from '../AddItem';
import Colores from '../../constants/colores';
import ListaItem from './ListaItem';
import ModalItem from '../Modal';

const Index = ({ navigation }) => {    

    const dispatch = useDispatch();  
    const personas = useSelector(state => state.personas.personas);
    
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);    
    const [textItem, setTextItem] = useState();
    const [counter, setCounter] = useState(5);


    useEffect(() => {
      dispatch(cargaPersonas());      
    }, [])
    


    const addItems = () => {  
      const nuevaPersona = {
        id: counter,
        value: textItem
      }
      dispatch(guardarPersona( nuevaPersona ));
      setTextItem('');
      setCounter(counter + 1);    
      Keyboard.dismiss();
    }

    const onHandlerModal = ( id ) => {
      setItemSelected(personas.filter( item => item.id === id)[0] );
      setModalVisible(!modalVisible);
    }  

    const onHandlerEditar = ( item ) => {    
      dispatch(seleccionarPersona(item.id));
      navigation.navigate('Editar', { id: item.id, value: item.value } );
    }

    const onHandlerChangueItem = ( texto ) => {
      setTextItem(texto);
    }

    const onHandlerDelete = ( id ) => {      

      dispatch(eliminaPersona(id));
      setItemSelected({});
      setModalVisible(!modalVisible);
    }

    const closeModal = () => {
      setModalVisible(!modalVisible); 
      setItemSelected({});
    } 
    
    const renderItem = data =>( <ListaItem data={ data } onHandlerModal={onHandlerModal} onHandlerEditar={onHandlerEditar} navigation={navigation}  /> );

    
    return (
        <View style={styles.container}>
          <Text style={ styles.titulo }>Listado de Item</Text>
          <AddItem textItem={textItem} onHandlerChangueItem={onHandlerChangueItem} addItems={addItems} />  
          <View style={styles.listItems}> 
            <FlatList 
            data={ personas } 
            renderItem={ renderItem } 
            keyExtractor={ item => item.id }  
            />            
          </View>
          <ModalItem modalVisible={ modalVisible } onHandlerDelete={ onHandlerDelete } itemSelected={itemSelected} closeModal={closeModal} />        
        </View>
    );
};

const styles = StyleSheet.create({ 
    container: {
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',
      flex: 1,
      backgroundColor: Colores.fondoAPP,
      alignItems: 'center',
      paddingTop: 50,
      paddingBottom: 10
    },  
    titulo: {
      fontFamily: 'GrapeNuts',
      color:'white',
      fontSize: 32,        
      marginBottom:10,
      borderRadius: 10       
    },  
    listItems:{       
      backgroundColor: Colores.fondoContainer,
      width: '90%',
      borderRadius:8,
      padding: 5,
      alignItems:'center'    
    }
  });

export default Index;