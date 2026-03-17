import { StyleSheet, Text, View } from "react-native";
import { borderRadius, colors, spacing } from "../../core/config";

interface VillaDetailPriceCardProps {
  dailyRent: string;
}

export function VillaDetailPriceCard({ dailyRent }: VillaDetailPriceCardProps) {
  return (
    <View style={styles.priceCard}>
      <Text style={styles.priceLabel}>From</Text>
      <Text style={styles.priceValue}>€{dailyRent}</Text>
      <Text style={styles.priceSuffix}>per day</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  priceCard: {
    backgroundColor: colors.primaryLight,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.primaryBorder,
  },
  priceLabel: {
    fontSize: 14,
    color: colors.textMuted,
    marginBottom: spacing.xs,
  },
  priceValue: {
    fontSize: 32,
    fontWeight: "700",
    color: colors.primary,
  },
  priceSuffix: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
});
