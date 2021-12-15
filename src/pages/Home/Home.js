import React from "react";
import Text from "components/Text";
import UserList from "components/UserList";
import { usePeopleFetch } from "hooks";
import Spinner from "components/Spinner";
import * as S from "../style";

const Home = () => {
  const { users, isLoading } = usePeopleFetch();

  return (
    <S.Home>
      <S.Content>
        <S.Header>
          <Text size="64px" bold>
            PplFinder
          </Text>
        </S.Header>
        {isLoading ? (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        ) : (
          <UserList users={users} />
        )}
      </S.Content>
    </S.Home>
  );
};

export default React.memo(Home);
