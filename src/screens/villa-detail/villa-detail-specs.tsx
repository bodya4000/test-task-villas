import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

import type { Villa } from '../../api/data/villas';
import { colors, spacing } from '../../core/config';

interface VillaDetailSpecsProps {
  villa: Villa;
}

export function VillaDetailSpecs({ villa }: VillaDetailSpecsProps) {
  return (
    <View style={styles.specsGrid}>
      <View style={styles.specItem}>
        <Ionicons name="people-outline" size={24} color={colors.primary} />
        <Text style={styles.specValue}>{villa.guests}</Text>
        <Text style={styles.specLabel}>Guests</Text>
      </View>
      <View style={styles.specItem}>
        <Ionicons name="bed-outline" size={24} color={colors.primary} />
        <Text style={styles.specValue}>{villa.bedrooms}</Text>
        <Text style={styles.specLabel}>Bedrooms</Text>
      </View>
      <View style={styles.specItem}>
        <Ionicons name="water-outline" size={24} color={colors.primary} />
        <Text style={styles.specValue}>{villa.bathrooms}</Text>
        <Text style={styles.specLabel}>Bathrooms</Text>
      </View>
      <View style={styles.specItem}>
        <Ionicons name="resize-outline" size={24} color={colors.primary} />
        <Text style={styles.specValue}>{villa.squareMeter}m²</Text>
        <Text style={styles.specLabel}>Area</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  specsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.lg,
    paddingVertical: spacing.lg,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.border
  },
  specItem: {
    flex: 1,
    minWidth: 70,
    alignItems: 'center',
    gap: 6
  },
  specValue: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text
  },
  specLabel: {
    fontSize: 13,
    color: colors.textMuted
  }
});
