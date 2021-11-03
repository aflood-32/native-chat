import React, { useState } from "react";
import { View, TextInput } from "react-native";
import SearchIcon from "../../../../assets/icons/search-icon.svg";
import { variables } from "../../../../styles/variables";
import SearchBarButton from "../SearchBarButtons/SearchBarButtons.component";
import PencilIcon from "../../../../assets/icons/search-pencil.svg";
import DotsIcon from "../../../../assets/icons/dots-icon.svg";
import { styles } from "./styles";

const SearchBar: React.FC = () => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.search}>
      <View style={styles.search__inputHolder}>
        <TextInput
          style={styles.search__input}
          onChangeText={setTerm}
          value={term}
          placeholder="Search in chats and people"
          placeholderTextColor={variables.placeholderTextColor}
          clearButtonMode="while-editing"
        />
        <SearchIcon style={styles.search__icon} />
      </View>
      <View style={styles.search__buttons}>
        <SearchBarButton handler={() => setTerm("res")}>
          <PencilIcon />
        </SearchBarButton>
        <SearchBarButton handler={() => setTerm("no")}>
          <DotsIcon />
        </SearchBarButton>
      </View>
    </View>
  );
};

export default SearchBar;
