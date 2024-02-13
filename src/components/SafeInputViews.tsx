import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';

interface SaveInputViewProps {
  children: React.ReactNode;
}

const SafeInputView = ({ children }: SaveInputViewProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.avoid}
      behavior={Platform.select({ ios: 'position' })}
      contentContainerStyle={{ flex: 1 }}
    >
      <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
        {children}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avoid: { flex: 1 },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
});

export default SafeInputView;
