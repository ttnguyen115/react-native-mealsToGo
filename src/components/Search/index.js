import React from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../services/location/context";

const Search = () => {
  const { keyword, search } = React.useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  const handleSubmitEditing = () => search(searchKeyword);
  const handleChangeText = (text) => setSearchKeyword(text);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={handleSubmitEditing}
        onChangeText={handleChangeText}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

Search.propTypes = {};

export default Search;
