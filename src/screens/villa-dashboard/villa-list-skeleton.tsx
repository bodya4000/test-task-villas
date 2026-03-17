import { FlatList, StyleSheet } from 'react-native';

import { CARD_GAP, SKELETON_ROWS } from '../../utils';
import { VillaDashboardHeader } from './villa-dashboard-header';
import { VillaItemSkeleton } from './villa-item-skeleton';

const skeletonRows = Array.from({ length: SKELETON_ROWS * 2 }, (_, i) => i);

export function VillaListSkeleton() {
  return (
    <FlatList
      data={skeletonRows}
      keyExtractor={(item) => String(item)}
      numColumns={2}
      columnWrapperStyle={styles.row}
      ListHeaderComponent={<VillaDashboardHeader title="All Villas" subtitle="Loading..." />}
      renderItem={() => <VillaItemSkeleton />}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    gap: CARD_GAP,
    marginBottom: CARD_GAP
  }
});
