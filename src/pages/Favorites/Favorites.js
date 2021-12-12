import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "../style";

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) | [];

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        <UserList users={favorites} />
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
