import React from "react";
import { Pressable } from "react-native";
import { styles } from "./styles";

interface ISearchBarButtons {
  handler: () => void;
  children: React.ReactNode;
}

const SearchBarButton: React.FC<ISearchBarButtons> = ({
  handler,
  children,
}) => {
  return (
    <Pressable
      style={({ pressed }) => styles(pressed).button}
      onPress={handler}
    >
      {children}
    </Pressable>
  );
};

export default SearchBarButton;
