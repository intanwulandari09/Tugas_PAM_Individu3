import React, { Component } from 'react';
import {
    View,
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
    Dimensions
} from 'react-native';



const Separator = () => (
  <View style={styles.separator} />
);

const {width, height} = Dimensions.get('window');

class Home extends Component {

    

    constructor(props) {
        super(props);
        this.state = {
            header: 'Hiling.id',
            footer: 'Copyright Ihtiandiko Wicaksono-119140118',
            refresh: false,
            data: [
                {id:1,      lokasi: 'Palembang',         tujuan: 'Jakarta',      tanggal: '13-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:2,      lokasi: 'Bandar Lampung',    tujuan: 'Semarang',     tanggal: '13-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:3,      lokasi: 'Palembang',         tujuan: 'Jakarta',      tanggal: '13-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:4,      lokasi: 'Jakarta',           tujuan: 'Palembang',    tanggal: '14-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:5,      lokasi: 'Jakarta',           tujuan: 'Palembang',    tanggal: '15-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:6,      lokasi: 'Jakarta',           tujuan: 'Palembang',    tanggal: '15-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:7,      lokasi: 'Bandar Lampung',    tujuan: 'Pontianak',    tanggal: '16-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:8,      lokasi: 'Samarinda',         tujuan: 'Banjarmasin',  tanggal: '17-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:9,      lokasi: 'Jambi',             tujuan: 'Indralaya',    tanggal: '18-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:10,     lokasi: 'Jambi',             tujuan: 'Indralaya',    tanggal: '18-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:11,     lokasi: 'Jakarta',           tujuan: 'Palembang',    tanggal: '19-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:12,     lokasi: 'Jakarta',           tujuan: 'Palembang',    tanggal: '19-03-2022',     maskapai: 'Sriwijaya Air'},
                {id:13,     lokasi: 'Jakarta',           tujuan: 'Palembang',    tanggal: '19-03-2022',     maskapai: 'Sriwijaya Air'},
            ],
            
        };
    }
    render() {
        return (
            <View style={{flex:1}}>
                <ImageBackground source={require('../images/bg.png')} resizeMode='cover' style={{width:this.width, height:this.height}}>
                <StatusBar barStyle='light-content' backgroundColor="#4fd914"/>
                <Text style={styles.header}>{this.state.header}</Text>

                <View style={styles.viewForm}>
                    <Text style={styles.variabelForm}>Lokasi Keberangkatan</Text>
                    <TextInput placeholder='Masukan lokasi keberangkatan' style={styles.TextInput}/>

                    <Text style={styles.variabelForm}>Lokasi Tujuan</Text>
                    <TextInput placeholder='Masukan lokasi tujuan' style={styles.TextInput}/>

                    <Text style={styles.variabelForm}>Tanggal Keberangkatan</Text>
                    <TextInput placeholder='Masukan Tanggal Keberangkatan' style={styles.TextInput}/>

                    <Button
                        title="cari"
                        color='#f5a742'
                        onPress={() => this.props.navigation.navigate('Detail', this.state.data)}
                    />
                    <Separator />
                </View>

                {/* <FlatList
                    style={{flex:1, marginTop:5}}
                    data={this.state.data}
                    refreshControl = {
                        <RefreshControl
                        refreshing={this.state.refresh} 
                        onRefresh={() => {console.log('Refrehhh'); this.setState({refresh: false})}}
                        />
                    }
                    renderItem={({item,index}) => 
                        <TouchableOpacity style={styles.flatList} onPress={() => ToastAndroid.show('Terima Kasih ' + item.lokasi, ToastAndroid.SHORT)}>
                        <Text style={{color:'white', fontSize:18}}>{item.lokasi}</Text>
                        <Text style={{color:'white', fontSize:18}}>{item.tujuan}</Text>
                        <Text style={{color:'white', fontSize:18}}>{item.tanggal}</Text>
                        </TouchableOpacity>}
                    keyExtractor={(item) => item.id}
                /> */}


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
        marginTop: 50,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },

    footer: {
        textAlign:'center',
        marginTop:130,
        color: 'grey'
    },

    viewForm: {
        marginTop: 50,
        marginHorizontal: 40,
        backgroundColor:'#FFFFFF',
        padding:20,
        elevation: 3,
        borderRadius: 20,
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