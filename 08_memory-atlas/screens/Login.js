import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../config/colors';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigation = useNavigation();

  const onLoginPress = () => {
    const message = `Username: ${username}\nPassword: ${password}\nRemember me: ${rememberMe}`;
    alert(message);
    navigation.navigate('Main');
  };

  const onForgotPasswordPress = () => {
    alert('FORGOT_PASSWORD');
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >

        <View style={styles.card}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to continue</Text>

          <View style={styles.field}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              onChangeText={text => setUsername(text)}
              style={styles.input}
              textContentType="username"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter password"
              returnKeyType="done"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              style={styles.input}
              textContentType="password"
            />
          </View>
          <View style={styles.row}>
            <Pressable
              onPress={toggleRememberMe}
              style={styles.rememberMe}
              accessibilityRole="button"
              accessibilityLabel="Toggle remember me">
              <Switch value={rememberMe} onValueChange={toggleRememberMe} />
              <Text style={styles.rememberMeText}>Remember me</Text>
            </Pressable>
          </View>
          <Pressable onPress={onLoginPress} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Login</Text>
          </Pressable>
          <View style={styles.row}>
            <Pressable
              onPress={onForgotPasswordPress}
              accessibilityRole="button"
              accessibilityLabel="Forgot password"
              hitSlop={10}
            >
              <Text style={styles.link}>Forgot password?</Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.dark0
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: colors.dark1,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  title: {
    color: colors.light3,
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: colors.light2,
    marginTop: 6,
    marginBottom: 18,
  },
  field: {
    marginBottom: 12,
  },
  label: {
    color: colors.light3,
    marginBottom: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  input: {
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'rgba(255,255,255,0.16)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.10)',
    color: colors.light3
  },
  row: {
    marginTop: 6,
    marginBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  rememberMeText: {
    color: colors.light3,
    fontWeight: '600',
  },
  link: {
    color: colors.light3,
    fontWeight: '700',
    marginTop: 12
  },
  primaryButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.brand2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
});