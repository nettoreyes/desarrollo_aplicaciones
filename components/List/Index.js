import { Button, FlatList, Keyboard, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import AddItem from '../AddItem';
import { AppLoading } from 'expo-app-loading';
import Colores from '../../constants/colores';
import ListaItem from './ListaItem';
import ModalItem from '../Modal';
import { useFonts } from 'expo-font';

const Index = ({ navigation }) => {    

    const [listItem, setListItem] = useState([{id:1, value:'Martin'},{id:2, value:'Bruno'},{id:3, value:'Leon'}]);
    const [itemSelected, setItemSelected] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [editar, setEditar] = useState(false);
    const [textItem, setTextItem] = useState();
    const [counter, setCounter] = useState(4);


    const addItems = () => {
      setListItem(currentItems => [
        ...currentItems,
        {id:counter, value: textItem }
      ]);
      setTextItem('');
      setCounter(counter + 1);    
      Keyboard.dismiss();
    }

    const onHandlerModal = ( id ) => {
      setItemSelected(listItem.filter( item => item.id === id)[0] );
      setModalVisible(!modalVisible);
    }  

    const onHandlerEditar = ( id ) => {
      setItemSelected(listItem.filter( item => item.id === id)[0] );    
      setEditar(true);
    }

    const onHandlerChangueItem = ( texto ) => {
      setTextItem(texto);
    }

    const onHandlerDelete = ( id ) => {
      setListItem( currentItems => currentItems.filter( item => item.id !== id));
      setItemSelected({});
      setModalVisible(!modalVisible);
    }

    const closeModal = () => {
      setModalVisible(!modalVisible); 
      setItemSelected({});
    } 

    const [loaded] = useFonts({
      Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
      RobotoBold: require('../../assets/fonts/Roboto-Bold.ttf'),
      GrapeNuts: require('../../assets/fonts/GrapeNuts-Regular.ttf'),
    });


    const renderItem = data =>( <ListaItem data={ data } onHandlerModal={onHandlerModal} onHandlerEditar={onHandlerEditar} navigation={navigation}  /> );


    // if (!loaded) return <AppLoading />

    return (
        <View style={styles.container}>
          <Text style={ styles.titulo }>Listado de Item</Text>
          <AddItem textItem={textItem} onHandlerChangueItem={onHandlerChangueItem} addItems={addItems} />  
          <View style={styles.listItems}> 
            <FlatList 
            data={ listItem } 
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