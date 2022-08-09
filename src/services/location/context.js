import React from "react";
import { locationRequest, locationTransform } from "./service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = React.useState("toronto");
  const [location, setLocation] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const onSearch = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      return;
    }

    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((result) => {
        setLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  };

  React.useEffect(() => {
    onSearch(keyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LocationContext.Provider
      value={{ loading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
