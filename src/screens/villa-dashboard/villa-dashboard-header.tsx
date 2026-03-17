import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from '@/src/core';

interface VillaDashboardHeaderProps {
  title: string;
  subtitle: string;
}

export function VillaDashboardHeader({ title, subtitle }: VillaDashboardHeaderProps) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.lg
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: -0.5
  },
  subtitle: {
    fontSize: 15,
    color: colors.textMuted,
    marginTop: spacing.xs
  }
});
