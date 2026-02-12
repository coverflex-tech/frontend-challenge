import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../../theme/tokens';

export const BenefitsListScreen = () => {
  return (
    <View style={styles.container} testID="benefits-screen">
      <Text style={styles.title}>Coverflex Benefits Challenge</Text>
      <Text style={styles.subtitle}>
        Build a universal benefits experience with Expo, React Native and React
        Native Web.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.md,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
});
