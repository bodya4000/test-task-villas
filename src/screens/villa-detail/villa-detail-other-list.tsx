import { FlatList, StyleSheet, Text, View } from 'react-native';

import type { Villa } from '../../api/data/villas';
import { colors, spacing } from '../../core/config';
import { VILLA_PREVIEW_CARD_WIDTH } from '../../utils';
import { VillaDetailPreviewCard } from './villa-detail-preview-card';

interface VillaDetailOtherListProps {
  villas: Villa[];
  currentVillaId: number;
}

export function VillaDetailOtherList({ villas, currentVillaId }: VillaDetailOtherListProps) {
  const otherVillas = villas.filter((v) => v.id !== currentVillaId);

  if (otherVillas.length === 0) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.title}>You might also like</Text>
      <FlatList
        data={otherVillas}
        keyExtractor={(item) => String(item.id)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        snapToInterval={VILLA_PREVIEW_CARD_WIDTH + spacing.md}
        snapToAlignment="start"
        decelerationRate="fast"
        nestedScrollEnabled
        renderItem={({ item }) => <VillaDetailPreviewCard villa={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: spacing.xl
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    marginBottom: spacing.md,
    letterSpacing: -0.5
  },
  list: {
    paddingRight: spacing.lg
  }
});
