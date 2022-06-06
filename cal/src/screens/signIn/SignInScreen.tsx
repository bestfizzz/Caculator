import { SafeAreaView, StyleSheet} from 'react-native'
import React from 'react'
import { Image, View, Text, Button, Colors, Typography  } from 'react-native-ui-lib'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../nav/RootStack';
import assets from 'react-native-ui-lib/src/assets';
import CustomTextInput from '../../components/CustomTextInput';
const SignUpScreen = () => {
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
          <CustomTextInput placeholder="Email" icon={undefined}  />
          <CustomTextInput
          password={true}
          placeholder="Password" icon={undefined}            
          />
          <Text s1 style={styles.txtForgot} marginB-50 marginT-10>
            Forgot Password ?
          </Text>
          <Button
            label="SIGN IN"
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
              Don't have an account?{' '}
              <Text
                s1
                c1
                onPress={() => {
                  navigation.navigate('SignUpScreen');
                }}>
                Sign Up
              </Text>
            </Text>
          </View>
        </SafeAreaView>
    </View>
    
  );
}

export default SignUpScreen

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
