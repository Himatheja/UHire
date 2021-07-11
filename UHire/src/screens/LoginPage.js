import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import colors from '../constants/colors';

const {width} = Dimensions.get('window');

const axios = require('axios');
const qs = require('query-string');

const styles = StyleSheet.create({
  container: {flex: 1, width: '100%', backgroundColor: colors.white},
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textInput: {
    width: width - 100,
    height: 40,
    borderWidth: 1,
    borderColor: colors.light_orange,
    borderRadius: 4,
    marginTop: 24,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  button: {
    width: width - 100,
    height: 40,
    backgroundColor: colors.light_orange,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
});

const LoginPage = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {
    axios
      .post(
        'https://api-uat.mrusta.com/token',
        qs.stringify({
          grant_type: 'password',
          username,
          password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
          },
        },
      )
      .then(res => {
        const {data} = res;
        props.navigation.reset({
          index: 0,
          routes: [{name: 'HomePage', params: {data}}],
        });
      })
      .catch(err => {
        console.log('error: ', err);
      });
  };

  return (
    <SafeAreaView style-={styles.container}>
      <View style={styles.content}>
        <Image
          style={{width: 100, height: 100}}
          source={require('../assets/mr_usta_icon.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={() => onLogin()}>
          <View style={styles.button}>
            <Text style={{color: colors.white, fontWeight: 'bold'}}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginPage;
