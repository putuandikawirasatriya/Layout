import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class BelajarLayout extends React.Component {
    render() {
      return (
      <View style={styles.containerMain}>
        <View style={styles.header}>
          <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }} >
          PTI</Text>
        </View>
        <View style={styles.slider}>
          <Text style={styles.text}>slider</Text>
        <Text style={styles.text}> RENA (React Native)</Text>
        </View>
        <View style={styles.isiBtn}>
          <View style={styles.btn1}>
            <View style={styles.button}><Text> L </Text></View>
            <View style={styles.button}><Text> O </Text></View>
            <View style={styles.button}><Text> V </Text></View>
            <View style={styles.button}><Text> E </Text></View>

          </View>
          <View style={styles.btn2}>
            <View style={styles.button}><Text> R </Text></View>
            <View style={styles.button}><Text> E </Text></View>
            <View style={styles.button}><Text> N </Text></View>
            <View style={styles.button}><Text> A </Text></View>

          </View>
          <View style={styles.footer}>
            <Text style={{ fontSize: 25, color: 'white', textAlign: 'center' }} >
            #JaenKuliahdiPTI</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#00695C', //warna dasar hijau muda
    flex: 1,
    flexDirection: 'column'
  },
  header: { //header pada layar
    flex: 1,
    backgroundColor: '#00695C', //hijau tua
    marginTop: 25,
    alingItems: 'center',
    justifyContent: 'center',

  },
  slider: {
    flex: 6, // colom pada slider
    backgroundColor: '#B2DFDB',
    flexDirection: 'column',
    justifyContent: 'space-around', //mengatur spasi pada tulisan
    alignItems: 'center' //rata tengah pada tulisan
    //space-around membuat spasi pada tulisan
    //space-between membuat spasi diantara tulisan
    //center mengatur tulisan pada box bagian tengah
    //flex-end mengatur tulisan pada box bagian akhir
    //flex-start mengatur tulisan pada box bagian awal
  },
  btn1: {
    flex: 5, // lebar box lebih besar dari 2
    backgroundColor: '#B2DFDB', //putih kehijauan
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  btn2: {
    flex: 5,
    backgroundColor: '#B2DFDB', //putih kehijauan
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#AED581', //hijau daun
    justifyContent: 'center',
    alignItems: 'center',
  },
  isiBtn: { // halaman tengah pada button
    flex: 9,
    backgroundColor: '#009688'//hijau biru
  },
  footer: {
    flex: 2,
    backgroundColor: '#004D40', //hijau tua
    //margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25  // text pada slider
  },
});
