import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import { getUser } from './network/API.js';
import { Linking } from 'expo';

export default function App() {
  let email = 'mobil@bulutklinik.com';
  let password = '123';

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo}/>
      <Text style={styles.welcomeText}>Hoşgeldiniz!</Text>
      <View style={styles.inputContainer}>
        <TextField
          label='Email Adresi'
          value={email}
          tintColor="#3BD29E"
          onChangeText={ (text) => email = text }
        />
        <TextField
          label='Şifre'
          value={password}
          secureTextEntry={true}
          tintColor="#3BD29E"
          onChangeText={ (text) => password = text }
        />
        <Text style={styles.forgotPasswordText} onPress={() => Linking.openURL('https://www.bulutklinik.com/Sec/Login/lost_pass')}>
        Şifremi Unuttum?
        </Text>
        <TouchableOpacity
          onPress={() => getUser(email, password)}
          style={styles.loginButton}
        >
          <Text style={styles.loginButtonText}>GİRİŞ</Text>
        </TouchableOpacity>
        <View style={styles.signupContainer}>
          <Text style={{color: '#696969'}}>Yeni kullanıcı mısınız?</Text>
          <Text style={{color: '#3BD29E', marginLeft: 5}} onPress={() => Linking.openURL('https://www.bulutklinik.com/')}>
            Üye ol!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,    
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    resizeMode: 'contain',
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 50,    
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    marginBottom: 100,    
  },
  forgotPasswordText: {
    marginBottom: 40,    
    fontSize: 14,
    textAlign: 'right',
    color: '#3BD29E',

  },
  loginButton: {
    backgroundColor: '#3BD29E',
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButtonText: {
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold', 
    color: 'white',
  },
  signupContainer: {
    marginTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
