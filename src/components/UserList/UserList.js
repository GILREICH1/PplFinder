import { useEffect, useState } from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { User } from "./User";
import Text from "components/Text";
import { COUNTRY_FILTERS } from "constant";

const UserList = ({ users }) => {
  const [filters, setFilters] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);

  useEffect(() => {
    const localFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(localFavorites);
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, []);

  function toggleFilter({ checked, value }) {
    if (checked) {
      setFilters((prev) => prev.filter((e) => e !== value));
    } else {
      setFilters((prev) => [...prev, value]);
    }
  }

  useEffect(() => {
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
          <Text>No users found for the above filters</Text>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
