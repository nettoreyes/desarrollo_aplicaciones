import { FlatList, StyleSheet, View } from 'react-native';

import Colores from '../../constants/colores';
import React from 'react';

const Index = ( props ) => {
    const { listItem, renderItem } = props;

    return (
        <View style={styles.listItems}> 
          <FlatList 
          data={ listItem } 
          renderItem={ renderItem } 
          keyExtractor={ item => item.id }  
          />            
        </View>
    );
};

const styles = StyleSheet.create({   
    listItems:{       
      backgroundColor: Colores.fondoContainer,
      width: '90%',
      borderRadius:8,
      padding: 5,
      alignItems:'center'    
    }
  });

export default Index;