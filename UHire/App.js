import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Screens
import LoginPage from './src/screens/LoginPage';
import HomePage from './src/screens/HomePage';
import JobDetails from './src/screens/JobDetails';
// constants
import colors from "./src/constants/colors";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{
            title: 'LOGIN',
            headerStyle: {
              backgroundColor: '#ff8d03',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'HOME PAGE',
            headerStyle: {
              backgroundColor: '#ff8d03',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="JobDetails"
          component={JobDetails}
          options={{
            title: 'JOB DETAILS',
            headerStyle: {
              backgroundColor: '#ff8d03',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
