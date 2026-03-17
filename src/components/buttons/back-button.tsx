import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { BACK_BUTTON_SIZE } from "../../utils";
import { PressableScale } from "../../components";

export function BackButton() {
  return (
    <PressableScale onPress={() => router.back()} style={styles.backButton} scale={0.92}>
      <View style={styles.backButtonInner}>
        <Ionicons name="chevron-back" size={24} color="#fff" />
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  backButton: {
    width: BACK_BUTTON_SIZE,
    height: BACK_BUTTON_SIZE,
    borderRadius: BACK_BUTTON_SIZE / 2,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  backButtonInner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.45)",
  },
});
