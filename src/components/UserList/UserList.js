import { useEffect, useState } from "react";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { User } from "./User";
import { COUNTRY_FILTERS } from "constant";

const UserList = ({ users, isLoading }) => {
  return (
    <S.UserList>
      <S.Filters>
        {COUNTRY_FILTERS.map((country) => (
          <CheckBox key={country} label={country} />
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
