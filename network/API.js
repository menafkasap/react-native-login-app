import React from 'react';
import { Alert } from 'react-native';

export async function getUser(email, password) {
  try {
  	let formdata = new FormData();
  	formdata.append('email', email)
  	formdata.append('password', password)

    let response = await fetch('https://www.bulutklinik.com/Api/Mobile/Login/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formdata,
    });
    let json = await response.json();
    if(json.error) {
    	Alert.alert('', json.error_msg)
    } else {
    	Alert.alert('', 'Merhaba ' + json.user.name + ' ' + json.user.surname)
    }

  } catch (error) {
    console.error(error);
  }
}
