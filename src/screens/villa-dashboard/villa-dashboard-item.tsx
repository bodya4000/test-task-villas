import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import type { Villa } from '../../api/data/villas';
import { PressableScale } from '../../components';
import { borderRadius, colors, spacing } from '../../core/config';
import { VILLA_CARD_IMAGE_ASPECT, villaCardWidth } from '../../utils';

interface VillaItemProps {
  villa: Villa;
}

export function VillaDashboardItem({ villa }: VillaItemProps) {
  return (
    <Link href={{ pathname: '/villa/[id]', params: { id: String(villa.id) } }} asChild>
      <PressableScale style={styles.card}>
        <Image source={{ uri: villa.image }} style={styles.image} contentFit="cover" />
        <View style={styles.cardContent}>
          <Text style={styles.location}>
            {villa.location} · {villa.category}
          </Text>
          <Text style={styles.name} numberOfLines={1}>
            {villa.name}
          </Text>
          <View style={styles.specs}>
            <View style={styles.spec}>
              <Ionicons name="people-outline" size={14} color={colors.textMuted} />
              <Text style={styles.specText}>{villa.guests}</Text>
            </View>
            <View style={styles.spec}>
              <Ionicons name="bed-outline" size={14} color={colors.textMuted} />
              <Text style={styles.specText}>{villa.bedrooms}</Text>
            </View>
            <View style={styles.spec}>
              <Ionicons name="resize-outline" size={14} color={colors.textMuted} />
              <Text style={styles.specText}>{villa.squareMeter}m²</Text>
            </View>
            <View style={styles.spec}>
              <Ionicons name="water-outline" size={14} color={colors.textMuted} />
              <Text style={styles.specText}>{villa.bathrooms}</Text>
            </View>
          </View>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              From €{villa.dailyRent}
              <Text style={styles.badgeSuffix}> / day</Text>
            </Text>
          </View>
        </View>
      </PressableScale>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: villaCardWidth,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3
  },
  image: {
    width: '100%',
    height: villaCardWidth * VILLA_CARD_IMAGE_ASPECT
  },
  cardContent: {
    padding: spacing.sm
  },
  location: {
    fontSize: 12,
    color: colors.textMuted,
    marginBottom: spacing.xs
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: spacing.sm
  },
  specs: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10
  },
  spec: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs
  },
  specText: {
    fontSize: 12,
    color: colors.secondary
  },
  badge: {
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary
  },
  badgeSuffix: {
    fontWeight: '400',
    color: colors.textMuted
  }
});
