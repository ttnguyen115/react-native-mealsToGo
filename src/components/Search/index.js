import PropTypes from "prop-types";
import React from "react";
import { Searchbar } from "react-native-paper";
import styled, { css } from "styled-components/native";
import { LocationContext } from "../../services/location/context";

const Search = ({ screen, isFavouritesToggle, onFavouritesToggle }) => {
  const { keyword, search } = React.useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = React.useState(keyword);

  React.useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer screen={screen}>
      <Searchbar
        placeholder="Search for a location"
        onIconPress={onFavouritesToggle}
        icon={isFavouritesToggle ? "heart" : screen}
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  ${(props) =>
    props.screen === "map" &&
    css`
      position: absolute;
      z-index: 999;
      top: 40px;
      width: 100%;
    `}
`;

Search.propTypes = {
  screen: PropTypes.string,
};

export default Search;
