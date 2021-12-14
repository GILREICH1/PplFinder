import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { User } from "./User";
import Text from "components/Text";
import { COUNTRY_FILTERS } from "constant";
import { favoritesContext } from "AppRouter";

const UserList = ({ users }) => {
  const { favorites, setFavorites } = React.useContext(favoritesContext);

  const [filters, setFilters] = React.useState([]);
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  const toggleFilter = React.useCallback(
    ({ checked, value }) => {
      if (checked) {
        setFilters((prev) => prev.filter((e) => e !== value));
      } else {
        setFilters((prev) => [...prev, value]);
      }
    },
    [setFilters, filters]
  );

  React.useEffect(() => {
    setFilteredUsers(users);
  }, []);

  React.useEffect(() => {
    if (filters.length === 0) {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(() =>
        users.filter((user) => filters.includes(user.location.country))
      );
    }
  }, [filters]);

  return (
    <S.UserList>
      <S.Filters>
        {COUNTRY_FILTERS.map((country) => (
          <CheckBox
            onChange={toggleFilter}
            value={country}
            key={country}
            label={country}
          />
        ))}
      </S.Filters>
      <S.List>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <User
              isFavorite={
                favorites.filter((fav) => fav.login.uuid === user.login.uuid).length > 0
              }
              key={`${user.name.first}_${user.name.last}`}
              user={user}
            />
          ))
        ) : (
          <Text>No users to display</Text>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
