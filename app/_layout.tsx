import 'react-native-gesture-handler';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="benefits/[id]"
        options={{ title: 'Benefit detail' }}
      />
    </Stack>
  );
}
