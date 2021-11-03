import React from "react";
import { View } from "react-native";
import ChatItem from "../ChatItem/ChatItem.component";
import { styles } from "./styles";

const ChatList: React.FC = () => {
  return (
    <View style={styles.list}>
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </View>
  );
};

export default ChatList;
