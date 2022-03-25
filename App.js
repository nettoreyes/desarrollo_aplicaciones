import {Button, FlatList, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [counter, setCounter] = useState(4);
  const [textItem, setTextItem] = useState();
  const [listItem, setListItem] = useState([{id:1, value:'Martin'},{id:2, value:'Bruno'},{id:3, value:'Leon'}]);
  const [itemSelected, setItemSelected] = useState({});
  const [modalVisible, setModalVisible] = useState(false);


  const addItem = () => {
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

  

  const renderItem = data => <Text onPress={onHandlerModal.bind(this, data.item.id) }>{data.item.id}-  {data.item.value}</Text>

  return (
    <View style={styles.container}>      
        <View style={styles.addItemContainer}>          
          <TextInput placeholder="Ingrese un item" style={styles.textInput} value={ textItem } onChangeText={ onHandlerChangueItem }></TextInput>
          <Button title="+ Agregar" onPress={ addItem }  />
        </View>
        <View style={styles.listItems}> 
          <FlatList 
          data={ listItem } 
          renderItem={ renderItem } 
          keyExtractor={ item => item.id }  
          />        
        </View>
        <Modal 
        animationType='slide' 
        visible={modalVisible} 
        transparent={true} 
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View><Text style={ styles.modalTitle }>Mi Modal</Text></View>
              <View style={ styles.modalMessage }><Text>¿ Esta seguro de borrar ?</Text></View>
              <View>
                <Text style={ styles.modalItem }>{ itemSelected.value }</Text>
              </View>
              <View style={{ flexDirection:'row', justifyContent:'space-between', width: 220, marginTop:10  }} >
                <Button title='Confirmar' color={ 'blue'}  onPress={ onHandlerDelete.bind(this, itemSelected.id) } />
                <Button title='Cancelar'  color={ 'red'}  onPress={ () => { setModalVisible(!modalVisible); setItemSelected({}); } } />
              </View>
            </View>
          </View>
        </Modal>
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
  },
  addItemContainer: {    
    backgroundColor:'#ECF0F1',
    alignItems: 'center',    
    justifyContent:'center',
    flexDirection:'row',
    marginBottom: 10,
    width: '90%',
    height: 100,
    borderRadius: 10
  },
  textInput: {
    borderColor: '#D7DBDD',
    borderWidth:1,
    borderRadius:8,
    backgroundColor: '#fff',
    padding: 10,
    marginRight: 10,
    width: 200,
    shadowColor: '#000',
    shadowOffset: { width:0, height: 5 },
    shadowOpacity: 0.36,
    textShadowRadius: 6.68,
    elevation:11
  },
  listItems:{
    flex: 3,
    backgroundColor: '#FDFEFE',
    width: '90%',
    borderRadius:8,
    padding: 10,
    alignItems:'center'    
  },
  modalTitle:{        
    fontSize: 18
  },
  modalMessage:{
    marginBottom: 10,
    justifyContent: 'center',
    alignItems:'center'
  },  
  modalItem:{
    fontSize: 30
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }, 
  modalView: {
    margin: 20,
    backgroundColor: "#E5E7E9",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,    
  },


});
