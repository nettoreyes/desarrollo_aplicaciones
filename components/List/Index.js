import { FlatList, StyleSheet, View } from 'react-native';

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
      flex: 3,
      backgroundColor: '#FDFEFE',
      width: '90%',
      borderRadius:8,
      padding: 10,
      alignItems:'center'    
    }
  });

export default Index;