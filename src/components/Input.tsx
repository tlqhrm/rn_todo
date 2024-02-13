import { StyleSheet, Text, TextInput, View } from 'react-native';
import { BLACK, GRAY, PRIMARY } from '../../color';
import { forwardRef, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const KeyboardTypes = {
  Default: 'default',
  NumberPad: 'number-pad',
  DecimalPad: 'decimal-pad',
  Numeric: 'numeric',
  EmailAddress: 'email-address',
  PhonePad: 'phone-pad',
};

export const ReturnKeyTypes = {
  Done: 'done',
  Go: 'go',
  Next: 'next',
  Search: 'search',
  Send: 'send',
};

export const IconNames = {
  EMAIL: 'email',
  PASSWORD: 'lock',
};

interface InputProps {
  title: string;
  placeholder?: string;
  keyboardType?: string; // KeyboardTypes?
  returnKeyType?: string;
  secureTextEntry?: boolean;
  value?: string;
}

const Input = forwardRef(({ title, placeholder, iconName, ...props }, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.title,
          props.value && styles.hasValueTitle,
          isFocused && styles.focusedTitle,
        ]}
      >
        {title}
      </Text>
      <View>
        <TextInput
          ref={ref}
          {...props}
          style={[
            styles.input,
            props.value && styles.hasValueInput,
            isFocused && styles.focusedInput,
          ]}
          placeholder={placeholder ?? title}
          placeholderTextColor={GRAY.DEFAULT}
          autoCapitalize={'none'}
          autoCorrect={false}
          onBlur={() => {
            setIsFocused(false);
          }}
          onFocus={() => {
            setIsFocused(true);
          }}
        />
        <View style={styles.icon}>
          <Icon
            name={iconName}
            size={20}
            color={(() => {
              switch (true) {
                case isFocused:
                  return PRIMARY.DEFAULT;
                case !!props.value:
                  return BLACK;
                default:
                  return GRAY.DEFAULT;
              }
            })()}
          ></Icon>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  title: {
    marginBottom: 4,
    color: GRAY.DEFAULT,
  },
  focusedTitle: {
    fontWeight: '600',
    color: PRIMARY.DEFAULT,
  },
  hasValueTitle: {
    color: BLACK,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: GRAY.DEFAULT,
    paddingHorizontal: 20,
    height: 42,
    paddingLeft: 30,
  },
  focusedInput: {
    borderColor: PRIMARY.DEFAULT,
    color: PRIMARY.DEFAULT,
  },
  hasValueInput: {
    color: BLACK,
    borderColor: BLACK,
  },
  icon: {
    position: 'absolute',
    left: 8,
    height: '100%',
    justifyContent: 'center',
  },
});

export default Input;
