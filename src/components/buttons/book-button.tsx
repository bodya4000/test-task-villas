import { BlurView } from "expo-blur";
import { StyleSheet, Text, View } from "react-native";
import { borderRadius, colors, spacing } from "../../core/config";
import { PressableScale } from "../../components";

interface BookButtonProps {
  onPress?: () => void;
  bottomInset?: number;
}

export function BookButton({ onPress, bottomInset = 0 }: BookButtonProps) {
  return (
    <View
      style={[styles.bookBar, { paddingBottom: bottomInset + spacing.md }]}
    >
      <BlurView
        intensity={80}
        tint="light"
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      />
      <View style={styles.bookBarContent}>
        <PressableScale style={styles.bookButton} onPress={onPress}>
          <Text style={styles.bookButtonText}>Book</Text>
        </PressableScale>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    borderTopWidth: 1,
    borderTopColor: "rgba(255,255,255,0.4)",
  },
  bookBarContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
  },
  bookButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    alignItems: "center",
    justifyContent: "center",
  },
  bookButtonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#fff",
  },
});
