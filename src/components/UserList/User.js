import React, { useState } from "react";
import Text from "components/Text";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";

export const User = ({ isFavorite, user }) => {
  // TODO
  // function favorite()
  // function unfavorite()
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <S.User onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <S.UserPicture src={user.picture.large} alt="" />
      <S.UserInfo>
        <Text size="22px" bold>
          {user.name.title} {user.name.first} {user.name.last}
        </Text>
        <Text size="14px">{user.email}</Text>
        <Text size="14px">
          {user.location.street.number} {user.location.street.name}
        </Text>
        <Text size="14px">
          {user.location.city} {user.location.country}
        </Text>
      </S.UserInfo>
      {/* TODO isVisible if favorite  */}
      <S.IconButtonWrapper isVisible={isHovering}>
        <IconButton>
          <FavoriteIcon color="error" />
        </IconButton>
      </S.IconButtonWrapper>
    </S.User>
  );
};
