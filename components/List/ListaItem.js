import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react'

const ListaItem = (props) => {
    const { onHandlerModal, data, onHandlerEditar, navigation } = props;
  return (
    <View style={styles.containerItem}>
        <Text style={{...styles.textItem, flex:1} }>{data.item.id}</Text>
        <Text style={{...styles.textItem, flex:5}}>{data.item.value}</Text>
        <View style={{flex:1, paddingEnd: 2 }}>
            {/* <Button title='_/' onPress={onHandlerEditar.bind(this, data.item.id) } /> */}
            <Button title='_/' onPress={ navigation.navigate.bind(this, 'Editar') } />
        </View>
        <View style={{flex:1, paddingStart:5}}>      
            <Button title='X' color={'red'} onPress={onHandlerModal.bind(this, data.item.id) } />
        </View>
    </View> 
  )
}

const styles = StyleSheet.create({   
    containerItem: {
      flexDirection: 'row',  
      alignContent: 'space-around',
      alignItems: 'center', 
      flexWrap: 'wrap', 
      flex:1,    
      backgroundColor:'white',
      width:340,
      margin: 2,    
      padding: 5,
    },
    textItem: {
        color: 'black',
    }
  });
  

export default ListaItem