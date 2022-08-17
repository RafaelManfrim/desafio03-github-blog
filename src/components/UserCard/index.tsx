import { FaGithub, FaBuilding, FaUserFriends, FaExternalLinkAlt } from "react-icons/fa";

import { UserCardContainer, UserInfoContainer, UserNameContainer, UserInfoContent } from "./styles";

interface UserCardProps {
  name: string;
  login: string;
  avatar_url: string;
  company: string;
  followers: number;
  bio: string;
  html_url: string;
}

export function UserCard({ name, login, avatar_url, company, followers, bio, html_url }: UserCardProps) {
  return (
    <UserCardContainer>
      <img src={avatar_url} alt="" />
      <UserInfoContainer>
        <UserNameContainer>
          <strong>{name}</strong>
          <a href={html_url} target="_blank">
            GITHUB <FaExternalLinkAlt />
          </a>
        </UserNameContainer>
        <p>{bio}</p>
        <UserInfoContent>
          <span>
            <FaGithub /> {login}
          </span>
          <span>
            <FaBuilding /> {company}
          </span>
          {followers > 0 && (
            <span>
              <FaUserFriends /> {followers} {followers === 1 ? "seguidor" : "seguidores"}
            </span>
          )}
        </UserInfoContent>
      </UserInfoContainer>
    </UserCardContainer>
  );
}