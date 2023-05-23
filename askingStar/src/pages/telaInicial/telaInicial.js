import React, { useState } from 'react';
import { Button, Text,  View , StyleSheet, Image} from 'react-native';
import ButtonIcomponent from '../../Components/buttonIComponent';


const image = {}

const TelaInicial = ({navigation}) => {

  const Separator = () => <View style={styles.separator} />


  
  const styles = StyleSheet.create({
    separator:{
      margin: 10,
    }
  })

  return (
    <View
      style={{
        color: 'white',
        flex: 1,
        backgroundColor: '#070719',
        padding: 5,
      }}>
     
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignitems: 'center',
          flex: 1,
        }}>
       
        <View
          style={{
            backgroundColor: '#0B0B3B',
            marginHorizontal: 10,
            borderRadius: 5,
          }}>

          <ButtonIcomponent stylebutton={styles.stylebutton} fpress={() => navigation.navigate('CADASTRO')} />
    </View>   
    <Separator/>
    <View
          style={{
            backgroundColor: '#0B0B3B',
            marginHorizontal: 10,
            borderRadius: 5,
          }}>
          <Button color="" title="Conectar"/>
        </View>
        <Text style={{ color: 'skyblue', marginHorizontal: 10 }}>
          Esqueceu a senha?
        </Text>
        <Text style={{ color: 'skyblue', marginHorizontal: 10 }}>
          Cadastre-se{' '}
        </Text>



      <View> 
      <Text style={{ color: 'skyblue', marginHorizontal: 10 }}>
          Cadastre-se{' '}
        </Text>
        

      </View>
      </View>


    
    </View>

  );
};

export default TelaInicial;
