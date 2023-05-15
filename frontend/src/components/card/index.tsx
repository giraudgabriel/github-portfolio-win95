import { Avatar, Tooltip, Button } from "react95";
import { Column, Row, Title, Text } from "../utils/styles";

interface IUserCardProps {
  user: Github.User | undefined;
}

export const Card = ({ user }: IUserCardProps) => {
  const goToGithub = () => {
    window.open(user?.html_url ?? "", "_blank");
  };

  const goToTwitter = () => {
    window.open(`https://twitter.com/${user?.twitter_username}`, "_blank");
  };

  const goToRepos = () => {
    window.open(user?.repos_url ?? "", "_blank");
  };

  return (
    <Row>
      <Column>
        <Column>
          <Tooltip text={user?.html_url ?? ""} enterDelay={0}>
            <Avatar
              src={user?.avatar_url}
              alt="avatar"
              square
              size={256}
              onClick={goToGithub}
            />
          </Tooltip>
          <Column gap="0.5px">
            <Title size="1rem">👨‍💻{user?.name}</Title>
          </Column>
        </Column>

        <Column gap="0.5px">
          {user?.company && <Text>🏢{user?.company}</Text>}
          {user?.email && <Text>📧{user?.email}</Text>}
          {user?.blog && <Text>🌐{user?.blog}</Text>}
          <Text>📍{user?.location}</Text>
        </Column>
      </Column>

      <Row justify="center" align="center">
        <Button onClick={goToRepos}>📊{user?.public_repos} public repos</Button>
        <Button>👨‍👩‍👧‍👦{user?.followers} followers</Button>
        <Button>👨‍👩‍👧‍👦{user?.following} following</Button>
        <Button onClick={goToTwitter}>
          <span role="img" aria-label="🐦">
            🐦
          </span>
          {user?.twitter_username}
        </Button>
      </Row>
    </Row>
  );
};
