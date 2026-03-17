import { StyleSheet } from "react-native";

export const colors = {
  primary: "#2563eb",
  primaryLight: "#f0f9ff",
  primaryBorder: "#e0f2fe",
  secondary: "#64748b",
  background: "#f8f9fa",
  surface: "#ffffff",
  text: "#1a1a1a",
  textMuted: "#666666",
  border: "#e5e7eb",
  error: "#ef4444",
  success: "#22c55e",
  warning: "#f59e0b",
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

export const borderRadius = {
  none: 0,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const layout = StyleSheet.create({
  flex: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  row: { flexDirection: "row" },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerAll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
