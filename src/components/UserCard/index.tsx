import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from "react-icons/fa";

import { UserCardContainer, UserInfoContainer, UserNameContainer, UserInfoContent } from "./styles";

export function UserCard() {
  return (
    <UserCardContainer>
      <img src="http://github.com/rafaelmanfrim.png" alt="" />
      <UserInfoContainer>
        <UserNameContainer>
          <strong>Rafael Manfrim</strong>
          <a href="http://github.com/rafaelmanfrim" target="_blank">
            GITHUB <FaExternalLinkAlt />
          </a>
        </UserNameContainer>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

        <UserInfoContent>
          <span>
            <FaGithub /> RafaelManfrim
          </span>
          <span>
            <FaBuilding /> Rocketseat
          </span>
          <span>
            <FaUserFriends /> 32 seguidores
          </span>
        </UserInfoContent>
      </UserInfoContainer>
    </UserCardContainer>
  );
}