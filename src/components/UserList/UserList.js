import { useEffect, useState } from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { User } from "./User";
import { COUNTRY_FILTERS } from "constant";

const UserList = ({ users }) => {
  const [filters, setFilters] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

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
    console.log(filters);
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
        {filteredUsers.map((user) => (
          <User key={`${user.id.value}_${user.name.first}`} user={user} />
        ))}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
