import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, TextInput, Pressable, StyleSheet, ScrollView } from 'react-native';

const PRIMARY = '#5865F2';
const BG = '#FFFFFF';

export default function App() {
  const [screen, setScreen] = useState('splash');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: screen === 'splash' ? PRIMARY : BG }}>
      <StatusBar barStyle={screen === 'splash' ? 'light-content' : 'dark-content'} />
      {screen === 'splash' ? (
        <Splash onContinue={() => setScreen('login')} />
      ) : screen === 'login' ? (
        <Login onLogin={() => setScreen('home')} />
      ) : (
        <Home />
      )}
    </SafeAreaView>
  );
}

function Splash({ onContinue }) {
  return (
    <View style={[styles.fill, styles.center, { backgroundColor: PRIMARY }]}>
      <Text style={styles.splashTitle}>PURSKill PRO</Text>
      <Text style={styles.splashSubtitle}>Logo placeholder</Text>
      <Pressable onPress={onContinue} style={styles.splashBtn}>
        <Text style={styles.splashBtnText}>Continue</Text>
      </Pressable>
    </View>
  );
}

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView contentContainerStyle={[styles.fill, styles.center, styles.p16]}>
      <Text style={styles.logo}>PURSKill PRO</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder='Email'
        placeholderTextColor='#888'
        style={styles.input}
        autoCapitalize='none'
        keyboardType='email-address'
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder='Password'
        placeholderTextColor='#888'
        style={styles.input}
        secureTextEntry
      />
      <Pressable onPress={onLogin} style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Login</Text>
      </Pressable>
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Text style={styles.signup}>Don't have an account? Sign up</Text>
      <Pressable onPress={onLogin} style={{ marginTop: 12 }}>
        <Text style={{ color: PRIMARY, fontWeight: '700' }}>Skip to Home</Text>
      </Pressable>
    </ScrollView>
  );
}

function Home() {
  return (
    <ScrollView contentContainerStyle={[styles.fill, styles.center, styles.p16]}>
      <Text style={styles.h1}>Welcome</Text>
      <Text style={styles.p}>Get skilled, get paid!</Text>
      <Pressable style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Get Started</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fill: { flexGrow: 1, width: '100%' },
  center: { alignItems: 'center', justifyContent: 'center' },
  p16: { padding: 16 },
  splashTitle: { color: '#fff', fontSize: 32, fontWeight: '800', letterSpacing: 1 },
  splashSubtitle: { color: '#ddd', fontSize: 14, marginTop: 8 },
  splashBtn: { marginTop: 24, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 12 },
  splashBtnText: { color: PRIMARY, fontWeight: '700' },
  logo: { fontSize: 22, fontWeight: '800', marginBottom: 16, color: '#111' },
  input: { width: '100%', maxWidth: 360, borderWidth: 1, borderColor: '#ddd', borderRadius: 12, paddingHorizontal: 12, paddingVertical: 12, marginVertical: 8 },
  primaryBtn: { marginTop: 12, backgroundColor: PRIMARY, paddingHorizontal: 20, paddingVertical: 14, borderRadius: 12 },
  primaryBtnText: { color: '#fff', fontWeight: '700' },
  forgot: { marginTop: 8, color: '#666' },
  signup: { marginTop: 4, color: '#666' },
  h1: { fontSize: 24, fontWeight: '800', marginBottom: 8, color: '#111' },
  p: { fontSize: 16, color: '#444', marginBottom: 16 },
});
