import {Button, Modal, StyleSheet, Text, View} from 'react-native';

import React from 'react';

const ModalItem =( prop ) => {
    const { modalVisible, onHandlerDelete, itemSelected, closeModal } = prop;
    
    if(!modalVisible) return null;

    console.log(itemSelected);
    
    return (
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
                      <Button title='Confirmar' color={ 'blue'}  onPress={ () => onHandlerDelete(itemSelected.id) } />
                      <Button title='Cancelar'  color={ 'red'}  onPress={ closeModal.bind(this) } />
                    </View>
                </View>
            </View>
    </Modal>
    );
};

const styles = StyleSheet.create({    
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

  export default ModalItem;