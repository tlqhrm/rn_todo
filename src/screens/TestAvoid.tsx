import { Image, StyleSheet, View } from 'react-native';
import Input, { KeyboardTypes, ReturnKeyTypes } from '../components/Input';
import SafeInputView from '../components/SafeInputViews';

const TestAvoid = () => {
  return (
    <SafeInputView>
      <View style={[styles.view, { backgroundColor: '#047857' }]}>
        <Image
          style={styles.image}
          source={require('../../assets/main.png')}
          resizeMode={'cover'}
        />
      </View>
      <View style={[styles.view, { backgroundColor: '#0369a1' }]}>
        <Input
          title={'email'}
          placeholder={'your@emali.com'}
          keyboardType={KeyboardTypes.EmailAddress}
          returnKeyType={ReturnKeyTypes.Next}
        ></Input>
      </View>
    </SafeInputView>
  );
};

const styles = StyleSheet.create({
  avoid: { flex: 1 },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default TestAvoid;
