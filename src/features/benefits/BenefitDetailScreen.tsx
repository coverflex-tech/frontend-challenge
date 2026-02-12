import { StyleSheet, View, Text } from 'react-native';
import { colors, spacing } from '../../theme/tokens';

export const BenefitDetailScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.sm,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});
