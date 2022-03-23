import React, { Component } from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, StatusBar, View, FlatList, ImageBackground} from 'react-native';

import { JADWAL, MASKAPAI, BANDARA } from '../database/db.js';

const Details = ({ route, navigation }) => {
  const data = route.params.text;
  const kedatanganId = BANDARA.find(item => item.bandara_nama === data.kedatangan).bandara_kode;
  const keberangkatanId = BANDARA.find(item => item.bandara_nama === data.keberangkatan).bandara_kode;
  const listAirplane = JADWAL.filter(item =>
    item.bandara_kode_keberangkatan === keberangkatanId &&
    item.bandara_kode_tujuan === kedatanganId &&
    item.jadwal_keberangkatan === data.tanggal);
  console.log(listAirplane);

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor="#c3c58c"/>
      <ImageBackground source={require('../images/bg22.png')} resizeMode='cover' style={{width:370, height:713}}>

      <Text style={{textAlign:'center', fontSize:30, marginTop:10, color:'black', fontWeight:'bold'}}>Rahayu.Id</Text>
      <Text style={styles.result}>Hasil Pencarian</Text>
      <Text style={styles.result}>(Tanggal Keberangkatan)</Text>



      <SafeAreaView style={styles.container}>
        

        <FlatList style={{marginTop:60}}
        
        
        

          data={listAirplane}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <TouchableOpacity style={styles.Details}>
                <View><Text style={styles.textResult}>L.Keberangkatan            -             L.Tujuan</Text></View>
                <View style={styles.airport}>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_keberangkatan).bandara_nama}
                  </Text>
                  <Text style={styles.text}>
                    {BANDARA.find(theItem => theItem.bandara_kode === item.bandara_kode_tujuan).bandara_nama}
                  </Text>
                </View>
                <View style={styles.time}>
                  <View style={styles.maskapai}>
                    <Text style={styles.text}>
                      {MASKAPAI.find(theItem => theItem.maskapai_id === item.maskapai_id).maskapai_nama}
                    </Text>
                  </View>
                  <Text style={styles.text}>
                    {item.jadwal_keberangkatan}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.jadwal_id}
        >

        </FlatList>

        <Text style={styles.footer}>Intan Wulandari - 119140077</Text>
      </SafeAreaView>


      </ImageBackground>

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom:50,
    },

    result:{
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 10
    },

    footer: {
        textAlign:'center',
        color:'grey'
    },
    
    textResult: {
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 10
    },

  card: {
    marginHorizontal: 30,
  },
  Details: {
    backgroundColor: '#c3c58c',
    padding: 20,
    borderRadius: 25,
    marginBottom: 20,
    elevation: 10,
  },
  airport: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  time: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  maskapai: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconPlane: {
    marginRight: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
});


export default Details;