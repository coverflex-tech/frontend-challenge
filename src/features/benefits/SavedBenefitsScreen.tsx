import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../../theme/tokens';

export const SavedBenefitsScreen = () => {
  return (
    <View style={styles.container} testID="saved-screen">
      <Text style={styles.title}>Saved benefits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.background,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
  },
});
