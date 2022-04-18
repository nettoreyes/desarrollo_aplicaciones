import { Button, Keyboard, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import AddItem from './components/AddItem';
import { AppLoading } from 'expo-app-loading';
import Colores from './constants/colores';
import EditItem from './components/EditItem';
import Index from './components/List/Index';
import ItemNavigation from './navigation/ItemNavigation';
import ListaItem from './components/List/ListaItem';
import ModalItem from './components/Modal';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    GrapeNuts: require('./assets/fonts/GrapeNuts-Regular.ttf'),
  });

  const [counter, setCounter] = useState(4);
  const [textItem, setTextItem] = useState();
  const [listItem, setListItem] = useState([{id:1, value:'Martin'},{id:2, value:'Bruno'},{id:3, value:'Leon'}]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [editar, setEditar] = useState(false);


  const addItems = () => {
    setListItem(currentItems => [
      ...currentItems,
      {id:counter, value: textItem }
    ]);
    setTextItem('');
    setCounter(counter + 1);    
    Keyboard.dismiss();
  }

  const onHandlerChangueItem = ( texto ) => {
    setTextItem(texto);
  }
  
  const onHandlerModal = ( id ) => {
    setItemSelected(listItem.filter( item => item.id === id)[0] );
    setModalVisible(!modalVisible);
  }  
  
  const onHandlerDelete = ( id ) => {
    setListItem( currentItems => currentItems.filter( item => item.id !== id));
    setItemSelected({});
    setModalVisible(!modalVisible);
  }

  const onHandlerEditar = ( id ) => {
    setItemSelected(listItem.filter( item => item.id === id)[0] );    
    setEditar(true);
  }

  const closeEditar = (  ) => {    
    setEditar(false);
  }

  const closeModal = () => {
    setModalVisible(!modalVisible); 
    setItemSelected({});
  } 

  const renderItem = data =>( <ListaItem data={ data } onHandlerModal={onHandlerModal} onHandlerEditar={onHandlerEditar}  /> );

  let contenido =  ( 
    <View style={styles.container}> 
      <Text style={ styles.titulo }>Listado de Item</Text>
      <AddItem textItem={textItem} onHandlerChangueItem={onHandlerChangueItem} addItems={addItems} />        
      <Index listItem={ listItem } renderItem={ renderItem } />
      <ModalItem modalVisible={ modalVisible } onHandlerDelete={ onHandlerDelete } itemSelected={itemSelected} closeModal={closeModal} />        
    </View>
  );

  if( editar ){
  contenido = (
      <EditItem itemSelected={itemSelected} onHandlerChangueItem={onHandlerChangueItem} addItems={addItems} closeEditar={closeEditar} />  
    );
 }

   if (!loaded) return <AppLoading />

    return ( 
      <ItemNavigation /> 
    );
  
  
}

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
    
  }
});
