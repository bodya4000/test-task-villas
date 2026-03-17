import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useVilla, useVillas } from "../../api";
import { colors, layout, spacing } from "../../core/config";
import { HERO_IMAGE_ASPECT, windowWidth } from "../../utils";
import { BackButton, BookButton } from "../../components";
import { VillaDetailOtherList } from "./villa-detail-other-list";
import { VillaDetailPriceCard } from "./villa-detail-price-card";
import { VillaDetailSpecs } from "./villa-detail-specs";

export function VillaDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const villaId = parseInt(id || "0", 10);
  const { villa, loading } = useVilla(villaId);
  const { data: villas } = useVillas();

  if (loading) {
    return (
      <View style={[layout.flex, layout.centerAll]}>
        <Text style={styles.errorText}>Loading...</Text>
      </View>
    );
  }

  if (!villa) {
    return (
      <View style={[layout.flex, layout.centerAll]}>
        <Text style={styles.errorText}>Villa not found</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: villa.name,
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => null,
        }}
      />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={styles.heroWrapper}>
          <Image
            source={{ uri: villa.image }}
            style={styles.heroImage}
            contentFit="cover"
          />
          <View
            style={[styles.backButtonOverlay, { top: insets.top + spacing.sm }]}
          >
            <BackButton />
          </View>
        </View>
        <View style={styles.details}>
          <Text style={styles.name}>{villa.name}</Text>
          <View style={[layout.row, layout.rowCenter, styles.locationRow]}>
            <Ionicons
              name="location-outline"
              size={18}
              color={colors.textMuted}
            />
            <Text style={styles.location}>{villa.location}</Text>
            <Text style={styles.category}>{villa.category}</Text>
          </View>
          <View style={[layout.row, layout.rowCenter, styles.ratingRow]}>
            <Ionicons name="star" size={18} color={colors.warning} />
            <Text style={styles.rating}>{villa.rating}</Text>
          </View>
          <VillaDetailSpecs villa={villa} />
          <VillaDetailPriceCard dailyRent={villa.dailyRent} />
          {villas.length > 0 && (
            <VillaDetailOtherList villas={villas} currentVillaId={villa.id} />
          )}
        </View>
      </ScrollView>
      <BookButton bottomInset={insets.bottom} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  content: {
    paddingBottom: 100,
  },
  heroWrapper: {
    position: "relative",
  },
  backButtonOverlay: {
    position: "absolute",
    left: spacing.md,
    zIndex: 10,
  },
  errorText: {
    fontSize: 16,
    color: colors.textMuted,
  },
  heroImage: {
    width: windowWidth,
    height: windowWidth * HERO_IMAGE_ASPECT,
  },
  details: {
    padding: spacing.lg,
  },
  name: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.text,
    marginBottom: spacing.sm,
  },
  locationRow: {
    gap: 6,
    marginBottom: spacing.sm,
  },
  location: {
    fontSize: 16,
    color: colors.secondary,
  },
  category: {
    fontSize: 14,
    color: colors.textMuted,
  },
  ratingRow: {
    gap: 6,
    marginBottom: spacing.lg,
  },
  rating: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
  },
});
