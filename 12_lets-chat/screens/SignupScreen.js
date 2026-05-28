import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import background from '../assets/background.jpg';
import styles from '../styles/authStyles';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';
import Button from '../components/Button';
import LinkButton from '../components/LinkButton';

export default function SignupScreen() {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const onSignupPress = async () => {
    if (email === '' || password === '') {
      alert('Please enter email and password');
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await addDoc(collection(db, 'users'), {
        userId: user.uid,
        nickname: nickname,
        role: "user",
        avatar: "shadow.jpg"
      });
    } catch (error) {
      console.error('Error signing up:', error);
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background}>
        <View>
          <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <View style={styles.card}>
              <Text style={styles.title}>Please sign up</Text>

              <View style={styles.field}>
                <Text style={styles.label}>Nickname</Text>
                <TextInput
                  autoCapitalize="words"
                  autoCorrect={false}
                  placeholder="Enter nickname"
                  placeholderTextColor="lightgray"
                  returnKeyType="next"
                  onChangeText={setNickname}
                  style={styles.input}
                  textContentType="nickname"
                />
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter email"
                  placeholderTextColor="lightgray"
                  returnKeyType="next"
                  onChangeText={setEmail}
                  style={styles.input}
                  textContentType="emailAddress"
                />
              </View>

              <View style={styles.field}>
                <Text style={styles.label}>Password</Text>
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter password"
                  placeholderTextColor="lightgray"
                  returnKeyType="done"
                  secureTextEntry
                  onChangeText={setPassword}
                  onSubmitEditing={onSignupPress}
                  style={styles.input}
                  textContentType="password"
                />
              </View>

              <Button title="Sign Up" onPress={onSignupPress} />

              <LinkButton onPress={() => navigation.navigate('Login')} labels={['Already have an account? Sign in']} />

            </View>
          </KeyboardAvoidingView>
        </View>
      </ImageBackground>
    </View>
  );
}