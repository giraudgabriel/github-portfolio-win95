import { Avatar, Tooltip, Button } from "react95";
import { Column, Row, Title, Text, Link } from "../utils/styles";
import { useGithubReadme } from "@/hooks/useGithubReadme";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useGithubUser } from "@/hooks/useGithubUser";
import githubService from "@/services/github.service";
import { ButtonText } from "./styles";

interface IUserCardProps {
  user: Github.User | undefined;
}

export const Card = ({ user }: IUserCardProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  user = user ?? useGithubUser(githubService.getUsername());

  const goToGithub = () => {
    window.open(user?.html_url ?? "", "_blank");
  };

  const goToTwitter = () => {
    window.open(`https://twitter.com/${user?.twitter_username}`, "_blank");
  };

  const goToRepos = () => {
    window.open(
      `https://github.com/${user?.login}?tab=repositories&q=&type=public&language=&sort=`,
      "_blank"
    );
  };

  const readme = useGithubReadme(user?.login ?? "") ?? user?.bio;

  return (
    <Row>
      <Column>
        <Column>
          <Tooltip text={user?.html_url ?? ""} enterDelay={0} position="bottom">
            <Avatar
              src={user?.avatar_url}
              alt="avatar"
              square
              size="15rem"
              onClick={goToGithub}
            />
          </Tooltip>
          <Column gap="0.5px">
            <Title size="1rem">👨‍💻{user?.name ?? "No name"}</Title>
          </Column>
          <Column gap="0.5px">
            {user?.company && <Text>🏢{user?.company}</Text>}
            {user?.email && <Text>📧{user?.email}</Text>}
            {user?.blog && (
              <Link
                onClick={() => {
                  window.open(user?.blog ?? "", "_blank");
                }}
              >
                🌐{user?.blog}
              </Link>
            )}
            {user?.location && <Text>📍{user?.location ?? "No Location"}</Text>}
          </Column>
        </Column>
      </Column>
      <Column>
        <Row justify="center" align="center">
          <Button onClick={goToRepos}>
            <ButtonText>📂{user?.public_repos} repos</ButtonText>
          </Button>
          <Button>
            <ButtonText>👥{user?.followers} followers</ButtonText>
          </Button>
          <Button>
            <ButtonText>👤{user?.following} following</ButtonText>
          </Button>
          <Button onClick={goToTwitter} disabled={!user?.twitter_username}>
            <ButtonText>
              <span role="img" aria-label="🐦">
                🐦
              </span>
              {user?.twitter_username ?? "No Twitter"}
            </ButtonText>
          </Button>
        </Row>

        <Column>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {readme ?? "*Loading...*"}
          </ReactMarkdown>
        </Column>
      </Column>
    </Row>
  );
};
