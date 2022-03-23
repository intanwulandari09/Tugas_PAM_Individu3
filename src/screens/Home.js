import React, {Component} from 'react';
import {View,
    Text,
    StatusBar, 
    ImageBackground, 
    StyleSheet, 
    TextInput, 
    Button, 
    RefreshControl, 
    FlatList, 
    TouchableOpacity, 
    ToastAndroid,
    Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const Separator = () => (
  <View style={styles.separator} />
);

const Home = ({navigation}) => {  
   const [text, handleText] = React.useState({ 
    keberangkatan: '',
    kedatangan: '',
    tanggal: '',
  });

  const getText = (nameVar) => {
    return (val) => {
      handleText({ ...text, [nameVar]: val });
      console.log(text);
    }
  }  
  
  return (
    <>
      <View style={{flex:1}}>
          <ImageBackground source={require('../images/bg.png')} resizeMode='cover' style={{width:370, height:713}}>
          <StatusBar barStyle='light-content' backgroundColor="#c3c58c"/>

          <Text style={styles.header}>Rahayu.id</Text>
          <View style={styles.viewForm}>
            <Text style={styles.variabelForm}>Lokasi Keberangkatan</Text>
            <TextInput placeholder='Masukan asal keberangkatan' style={styles.TextInput} onChangeText={getText('keberangkatan')} value={text.keberangkatan}/>

            <Text style={styles.variabelForm}>Lokasi Tujuan</Text>
            <TextInput placeholder='Masukan tujuan' style={styles.TextInput} onChangeText={getText('kedatangan')} value={text.kedatangan}/>

            <Text style={styles.variabelForm}>Tanggal Keberangkatan</Text>
            <TextInput placeholder='Masukan Tanggal Keberangkatan' style={styles.TextInput} onChangeText={getText('tanggal')} value={text.tanggal}/>

            <Button
                title="search"
                color='#c3c58c'
                onPress={() => navigation.navigate('Details', {text})}
            />
            <Separator />
        </View>

        <Text style={styles.footer}>Intan Wulandari - 119140077</Text>

          </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 40,
        textAlign: 'center',
        marginTop: 50,
        color: 'black',
        fontWeight: 'bold',
    },

    footer: {
        textAlign:'center',
        marginTop:100,
        color: 'grey'
    },

    viewForm: {
        marginTop: 50,
        marginHorizontal: 40,
        backgroundColor:'#FFFFFF',
        padding:20,
        elevation: 3,
        borderRadius: 20,
        borderColor:'black', 
        borderWidth:3,
    },

    variabelForm: {
        fontWeight: 'bold',
        color: '#000000',
        fontSize:14
    },

    TextInput: {
        borderBottomWidth: 1,
        borderWidth:1,
        marginHorizontal:0,
        paddingHorizontal:10,
        borderColor:'#adadad',
        borderRadius:4,
        marginTop:10,
        color:'#666666',
        fontSize: 12,
        paddingVertical:5,
        marginBottom:35,
    },

    separator: {
        marginVertical: 8,
        
    },

    flatList: {
        marginBottom:10, 
        backgroundColor:'#2196f3', 
        marginHorizontal:20, 
        borderRadius:30, 
        justifyContent:'center', 
        alignItems:'center'
    },
});

export default Home;