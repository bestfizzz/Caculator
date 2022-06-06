import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import {
    View,
    Assets,
    Text,
    Colors,
    Button,
    Typography,
    Image,
  } from 'react-native-ui-lib';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../nav/RootStack';
import CustomTextInput from '../../components/CustomTextInput';
import assets from 'react-native-ui-lib/src/assets';
const SignInScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View flex>
      <View marginV-70 >
      <Image
       source={assets.imgs.union} 
       style={styles.container}
       />
       </View>
       <View padding-40>
          <CustomTextInput icon={assets.icons.email} placeholder="Email" />
          <CustomTextInput
                  password={true}
                  placeholder="Password" icon={undefined}          />
          <Button
            label="SIGN UP"
            backgroundColor='#F79E89'
            color={Colors.black}
            fullWidth
            labelStyle={Typography.b16}
            style={styles.btnSignIn}
            onPress={() => navigation.navigate('MainApp')}
          />
       </View>
       <SafeAreaView>
          <View center marginB-30>
            <Text >
              Have an account?{' '}
              <Text
                s1
                c1
                onPress={() => {
                  navigation.navigate('SignInScreen');
                }}>
                Log In
              </Text>
            </Text>
          </View>
        </SafeAreaView>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        left: 65,
        top: 40,
      },
      txtForgot: {
        textAlign: 'right',
      },
      btnSignIn: {
        width: '100%',
        padding: 50,
        borderRadius: 10,
        top: 1
      },
})