import {Button, StyleSheet, TextInput, View} from 'react-native';

const AddItem = ( props ) => {
    const { textItem, onHandlerChangueItem, addItems } = props;

    return (
        <View style={styles.addItemContainer}>          
          <TextInput placeholder="Ingrese un item" style={styles.textInput} value={ textItem } onChangeText={ onHandlerChangueItem }></TextInput>
          <Button title="+ Agregar" onPress={ addItems }  />
        </View>
    );
};

const styles = StyleSheet.create({   
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
    }     
  });

export default AddItem;
