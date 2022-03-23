import React, { Component } from 'react';
import {Text, View, StatusBar, ImageBackground, StyleSheet,Dimensions, RefreshControl, 
    FlatList, 
    TouchableOpacity, 
    ToastAndroid} from 'react-native';

const {width, height} = Dimensions.get('window');

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            header: 'Hiling.id',
            footer: 'Copyright Ihtiandiko Wicaksono-119140118',
            refresh: false
         };
    }
    render() {
        return (
            <View>
            <StatusBar barStyle='light-content' backgroundColor="#4fd914"/>
            <ImageBackground source={require('../images/bg22.png')} resizeMode='cover' style={{width:width, height:height}}>
                <Text style={styles.header}>{this.state.header}</Text>
                <Text style={styles.result}>Hasil Pencarian Penerbangan</Text>
                <Text style={styles.result}>(Tanggal Keberangkatan)</Text>

                <View style={styles.viewResult}>
                    <Text style={styles.textResult}>L.Keberangkatan     -      L.Tujuan</Text>
                </View>


               
                    {/* <Text style={{color:'black'}}>{this.props.route.params.nama}</Text> */}
                    <FlatList
                    style={{flex:1, marginTop:5}}
                    data={this.props.route.params.data}
                    refreshControl = {
                        <RefreshControl
                        refreshing={this.state.refresh} 
                        onRefresh={() => {console.log('Refrehhh'); this.setState({refresh: false})}}
                        />
                    }
                    renderItem={({item,index}) => 
                        <TouchableOpacity style={styles.flatList} onPress={() => ToastAndroid.show('Terima Kasih ' + item.data.lokasi, ToastAndroid.SHORT)}>
                            <Text style={{color:'black', fontSize:18}}>{item.data.lokasi}</Text>
                            <Text style={{color:'black', fontSize:18}}>{item.data.tujuan}</Text>
                            <Text style={{color:'black', fontSize:18}}>{item.data.tanggal}</Text>
                        </TouchableOpacity>}
                    keyExtractor={(item) => item.id}
                />
                



                <Text style={styles.footer}>{this.state.footer}</Text>
            </ImageBackground>    
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom:10
    },

    result:{
        fontSize: 15,
        color: '#FFFFFF',
        textAlign: 'center',
    },

    viewResult: {
        marginTop: 60,
        marginHorizontal: 30,
        backgroundColor:'#FFFFFF',
        padding:20,
        elevation: 3,
        borderRadius: 5,
    },

    footer: {
        textAlign:'center',
        marginTop:130,
        color:'grey'
    },

    textResult: {
        fontWeight: 'bold',
        color: '#000000',
        

    },

    flatList: {
        marginBottom:10, 
        backgroundColor:'#2196f3', 
        marginHorizontal:20, 
        borderRadius:30, 
        justifyContent:'center', 
        alignItems:'center',
    },

});

export default Detail;