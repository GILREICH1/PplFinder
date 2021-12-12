import React, { useEffect } from "react";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import * as S from "./style";
import { User } from "./User";

const UserList = ({ users, isLoading }) => {
  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" label="Brazil" />
        <CheckBox value="AU" label="Australia" />
        <CheckBox value="CA" label="Canada" />
        <CheckBox value="DE" label="Germany" />
      </S.Filters>
      <S.List>
        {isLoading ? (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        ) : (
          users.map((user) => {
            return <User key={`${user.id.value}_${user.name.first}`} user={user} />;
          })
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
