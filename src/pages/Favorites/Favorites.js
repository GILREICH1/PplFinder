import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import * as S from "../style";
import { favoritesContext } from "AppRouter";

const Favorites = () => {
  const { favorites } = React.useContext(favoritesContext);

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            Favorites
          </Text>
        </S.Header>
        {favorites.length === 0 ? (
          <h2>You have no favorites saved!</h2>
        ) : (
          <UserList key={`favoritesUserList_${favorites.length}`} users={favorites} />
        )}
      </S.Content>
    </S.Home>
  );
};

export default Favorites;
