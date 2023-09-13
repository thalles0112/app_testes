import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';



export default function Lista(data) {
    const [ddata, setData] = useState(data.data)
    
    useEffect(()=>{
        setData(data.data)
    },[data])
  const renderItem = ({ item }) => (
    <View style={styles.item}>
        <View style={styles.itemData}>
            <Text style={styles.itemDay}>
                {item.data.split('-')[2]}/{item.data.split('-')[1]}
            </Text>

            <Text style={styles.itemYear}>
            {item.data.split('-')[0]}
            </Text>
        </View>
      

      <Text style={styles.itemTomado}>{item.tomado?"Tomado":"Não Tomado"}</Text>
    </View>
  );

  if (ddata){
    return (
      <View style={styles.container}>
        <FlatList
          data={ddata}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  else{
    return(
      <View style={styles.container}>
       
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    height: "20%",
    width: "90%",
    marginHorizontal: '5%',
    backgroundColor: '#d1d1d1',
    borderRadius: 5,
  },
  item: {
    backgroundColor: '#0e5e1a',
    padding: 20,
    borderRadius: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
itemData:{
    width: '30%',
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 5,
    padding: 5,
    display: 'flex',
    alignContent: 'center'
},

  itemDay:{
    color: "#fff",
    textAlign: 'center'
  },
  itemYear:{
    fontSize: 24,
    color: "#fff",
    textAlign: 'center',
    fontWeight: 'bold'

  },
  itemTomado:{
    color: '#fff'
  }
});

