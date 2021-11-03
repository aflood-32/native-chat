import React from "react";
import ViewWrapper from "../../components/ViewWrapper/ViewWrapper.component";
import SearchBar from "./components/SearchBar/SearchBar.component";
import ChatList from "./components/ChatList/ChatList.component";

const Chat: React.FC = () => {
  return (
    <ViewWrapper>
      <SearchBar />
      <ChatList />
    </ViewWrapper>
  );
};

export default Chat;
