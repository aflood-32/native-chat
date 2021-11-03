import { StyleSheet } from "react-native";
import { variables } from "../../../../styles/variables";

export const styles = StyleSheet.create({
  search: {
    backgroundColor: variables.bgGray,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  search__inputHolder: {
    display: "flex",
    justifyContent: "center",
  },
  search__icon: {
    position: "absolute",
    left: 15,
  },
  search__input: {
    backgroundColor: "#E4E4E4",
    paddingVertical: 10,
    paddingRight: 20,
    paddingLeft: 40,
    borderRadius: 8,
  },
  search__buttons: {},
});
