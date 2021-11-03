import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const ChatItem: React.FC = () => {
  return (
    <View style={styles.chat}>
      <Text>Item</Text>
    </View>
  );
};

export default ChatItem;
