import { Button, Image, StyleSheet, Text, View } from 'react-native';

import React from 'react'

const ListaItem = (props) => {
    const { onHandlerModal, data, onHandlerEditar } = props;


  return (
    <View style={styles.containerItem}>
        {/* <Text style={{...styles.textItem, flex:1} }>{data.item.id}</Text> */}
        {!data.item.imagen ? ( <Text style={styles.image}>Img</Text> ) :  (<Image style={styles.image} source={{ uri: data.item.imagen }} />)}
        <Text style={{...styles.textItem, flex:4}}>{data.item.value}</Text>
        <View style={{flex:1, paddingEnd: 2 }}>
            <Button title='_/' onPress={() => onHandlerEditar(data.item) } />            
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
        marginStart: 5,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'blue', 
        flex: 1,
        padding: 2
    }
  });
  

export default ListaItem