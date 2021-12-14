import React from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { User } from "./User";
import Text from "components/Text";
import { COUNTRY_FILTERS } from "constant";

const UserList = ({ users }) => {
  const [favorites, setFavorites] = React.useState([]);
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
    const localFavorites = localStorage.getItem("favorites") || [];
    setFavorites(JSON.parse(localFavorites));
    console.log({ filteredUsers, users });
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
              setFavorites={setFavorites}
              favorites={favorites}
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
