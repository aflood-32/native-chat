import { StyleSheet } from "react-native";

export const styles = (
  pressed: boolean
): ReturnType<typeof StyleSheet.create> =>
  StyleSheet.create({
    button: {
      opacity: pressed ? 0.8 : 1,
    },
  });
