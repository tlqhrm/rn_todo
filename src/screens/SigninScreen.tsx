import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../components/Input';
import { useRef, useState } from 'react';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef('');

  return (
    <KeyboardAvoidingView
      style={styles.avoid}
      behavior={Platform.select({ ios: 'position' })}
      contentContainerStyle={{ flex: 1 }}
    >
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/main.png')}
            resizeMode={'cover'}
          />
          <Input
            value={email}
            onChangeText={(text) => setEmail(text.trim())}
            title={'email'}
            placeholder={'your@emali.com'}
            keyboardType={KeyboardTypes.EmailAddress}
            returnKeyType={ReturnKeyTypes.Next}
            iconName={IconNames.EMAIL}
          ></Input>
          <Input
            ref={passwordRef}
            value={password}
            onChangeText={(text) => setPassword(text.trim())}
            title={'password'}
            secureTextEntry
            iconName={IconNames.PASSWORD}
          ></Input>
        </View>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avoid: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default SigninScreen;
