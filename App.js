import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AddItem from './components/AddItem';
import Index from './components/List/Index';
import ModalItem from './components/Modal';

export default function App() {

  const [counter, setCounter] = useState(4);
  const [textItem, setTextItem] = useState();
  const [listItem, setListItem] = useState([{id:1, value:'Martin'},{id:2, value:'Bruno'},{id:3, value:'Leon'}]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);


  const addItems = () => {
    setListItem(currentItems => [
      ...currentItems,
      {id:counter, value: textItem }
    ]);
    setTextItem('');
    setCounter(counter + 1);    
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

  const closeModal = () => {
    setModalVisible(!modalVisible); 
    setItemSelected({});
  }  

  const renderItem = data => <Text onPress={onHandlerModal.bind(this, data.item.id) }>{data.item.id}-  {data.item.value}</Text>

  return (
    <View style={styles.container}>  
        <AddItem textItem={ textItem } onHandlerChangueItem={ onHandlerChangueItem } addItems={ addItems } />        
        <Index listItem={ listItem } renderItem={ renderItem } />
        <ModalItem modalVisible={ modalVisible } onHandlerDelete={ onHandlerDelete } itemSelected={itemSelected} closeModal={closeModal} />        
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
    backgroundColor: '#212F3C',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 10
  }
});
