import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

interface IViewWrapper {
  children: React.ReactNode;
}

const ViewWrapper: React.FC<IViewWrapper> = ({ children }) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

export default ViewWrapper;
