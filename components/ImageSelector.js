import * as ImagePicker from 'expo-image-picker';

import {Alert, Button, Image, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react'

const ImageSelector = (props) => {
    const[pickedUri, setPickedUri] = useState(props.imagenPersona);

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();

        if (status !== 'granted') {
          Alert.alert('Permisos insuficientes', 'Necesitas permisos para acceder a la camara', [{text: 'OK'}]);
          return false;
        }
        return true;
      }
    
      const handlerTakeImage = async () => {
        const isCameraOk = await verifyPermissions();
        if (!isCameraOk) return ;
    
        const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.8,
        });
    
        
        setPickedUri(image.uri);  
        props.setImage(image.uri);  
        
      }

  return (
    <View style={styles.container}>
        <View style={styles.preview}>
            { !pickedUri ? ( <Text>Sin imagen...</Text> ) : (<Image style={styles.image} source={{ uri: pickedUri }} /> ) }
        </View>
        <Button title="Tomar foto" onPress={handlerTakeImage} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        width: '90%',
    },
    preview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D7DBDD',
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default ImageSelector