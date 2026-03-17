import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

import type { Villa } from '../../api/data/villas';
import { PressableScale } from '../../components';
import { borderRadius, colors, spacing } from '../../core/config';
import { VILLA_PREVIEW_CARD_HEIGHT, VILLA_PREVIEW_CARD_WIDTH } from '../../utils';

interface VillaDetailPreviewCardProps {
  villa: Villa;
}

export function VillaDetailPreviewCard({ villa }: VillaDetailPreviewCardProps) {
  return (
    <Link href={{ pathname: '/villa/[id]', params: { id: String(villa.id) } }} asChild>
      <PressableScale style={styles.card} scale={0.97}>
        <Image source={{ uri: villa.image }} style={styles.image} contentFit="cover" />
        <View style={styles.overlay}>
          <View style={styles.overlayContent}>
            <Text style={styles.name} numberOfLines={2}>
              {villa.name}
            </Text>
            <View style={styles.footer}>
              <Text style={styles.location}>
                {villa.location} · {villa.category}
              </Text>
              <Text style={styles.price}>€{villa.dailyRent}</Text>
            </View>
          </View>
        </View>
      </PressableScale>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    width: VILLA_PREVIEW_CARD_WIDTH,
    height: VILLA_PREVIEW_CARD_HEIGHT,
    borderRadius: borderRadius.xl,
    overflow: 'hidden',
    marginRight: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8
  },
  image: {
    ...StyleSheet.absoluteFillObject
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end'
  },
  overlayContent: {
    padding: spacing.md,
    paddingTop: spacing.lg,
    backgroundColor: 'rgba(0,0,0,0.65)'
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: spacing.xs,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  location: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primaryLight,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2
  }
});
