import React from "react";
import * as S from "./style";
import User from "./User";
import Text from "components/Text";
import Filter from "components/Filter";
import { favoritesContext } from "AppRouter";

const UserList = ({ users }) => {
  const { favorites } = React.useContext(favoritesContext);

  const [filteredUsers, setFilteredUsers] = React.useState([]);

  React.useEffect(() => {
    setFilteredUsers(users);
  }, []);

  return (
    <>
      <Filter setFilteredUsers={setFilteredUsers} users={users} />
      <S.UserList>
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
    </>
  );
};

export default UserList;
