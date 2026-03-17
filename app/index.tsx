import { FlatList, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useVillas } from '@/src/api';
import { colors, spacing } from '@/src/core';
import {
  VillaDashboardHeader,
  VillaDashboardItem,
  VillaListSkeleton
} from '@/src/screens/villa-dashboard';
import { CARD_GAP } from '@/src/utils';

export default function VillaDashboard() {
  const insets = useSafeAreaInsets();
  const { data: villasData, loading } = useVillas();

  return (
    <View style={[styles.container, { paddingTop: insets.top}]}>
      {loading ? (
        <VillaListSkeleton />
      ) : (
        <FlatList
          data={villasData}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <VillaDashboardHeader
              title="All Villas"
              subtitle={`${villasData.length} Properties`}
            />
          }
          renderItem={({ item }) => <VillaDashboardItem villa={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md
  },
  row: {
    gap: CARD_GAP,
    marginBottom: CARD_GAP
  }
});
