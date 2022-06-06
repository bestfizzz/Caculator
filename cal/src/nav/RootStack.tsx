import * as React from 'react';

import SignInScreen from '../screens/signIn/SignInScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/signUp/SignUpScreen';

export type RootStackParamList = {
  SignInScreen: undefined;
  SignUpScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      </NavigationContainer>
  );
}

export default RootStack;

