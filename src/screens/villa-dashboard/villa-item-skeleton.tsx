import { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { colors, spacing, borderRadius } from "../../core/config";
import { villaCardWidth, VILLA_CARD_IMAGE_ASPECT } from "../../utils";

const SKELETON_BG = colors.border;

export function VillaItemSkeleton() {
  const opacity = useSharedValue(0.5);

  useEffect(() => {
    opacity.value = withRepeat(withTiming(1, { duration: 800 }), -1, true);
  }, [opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.card}>
      <Animated.View style={[styles.image, animatedStyle]} />
      <View style={styles.cardContent}>
        <Animated.View style={[styles.line, styles.locationLine, animatedStyle]} />
        <Animated.View style={[styles.line, styles.nameLine, animatedStyle]} />
        <View style={styles.specs}>
          {[1, 2, 3, 4].map((i) => (
            <Animated.View key={i} style={[styles.specDot, animatedStyle]} />
          ))}
        </View>
        <View style={styles.badge}>
          <Animated.View style={[styles.line, styles.badgeLine, animatedStyle]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: villaCardWidth,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: villaCardWidth * VILLA_CARD_IMAGE_ASPECT,
    backgroundColor: SKELETON_BG,
  },
  cardContent: {
    padding: spacing.sm,
  },
  line: {
    backgroundColor: SKELETON_BG,
    borderRadius: 4,
  },
  locationLine: {
    width: "70%",
    height: 12,
    marginBottom: spacing.xs,
  },
  nameLine: {
    width: "90%",
    height: 16,
    marginBottom: spacing.sm,
  },
  specs: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 10,
  },
  specDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: SKELETON_BG,
  },
  badge: {
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  badgeLine: {
    width: "60%",
    height: 14,
  },
});
