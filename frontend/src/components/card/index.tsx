import { Avatar, Tooltip, Button } from "react95";
import { Column, Row, Title, Text, Link } from "../utils/styles";
import { useGithubReadme } from "@/hooks/useGithubReadme";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useGithubUser } from "@/hooks/useGithubUser";
import githubService from "@/services/github.service";
import { ButtonText } from "./styles";
import {
  Computer,
  Computer2,
  Earth,
  Explorer100,
  Folder,
  Mail,
  User,
  Wab321019,
} from "@react95/icons";

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
            <Title size="0.875rem">
              <Computer2 width={16} height={16} />
              {user?.name ?? "No name"}
            </Title>
          </Column>
          <Column gap="0.5px">
            {user?.company && (
              <Text>
                <Computer width={16} height={16} /> {user?.company}
              </Text>
            )}
            {user?.email && (
              <Text>
                <Mail width={16} height={16} /> {user?.email}
              </Text>
            )}
            {user?.blog && (
              <Link
                onClick={() => {
                  window.open(user?.blog ?? "", "_blank");
                }}
              >
                <Explorer100 width={16} height={16} /> {user?.blog}
              </Link>
            )}
            {user?.location && (
              <Text>
                <Earth width={16} height={16} />{" "}
                {user?.location ?? "No Location"}
              </Text>
            )}
            {user?.twitter_username && (
              <Text>
                Twitter:{" "}
                <Link onClick={goToTwitter}>@{user?.twitter_username}</Link>
              </Text>
            )}
          </Column>
        </Column>
      </Column>
      <Column>
        <Row justify="center" align="center">
          <Button onClick={goToRepos}>
            <ButtonText>
              <Folder
                width={16}
                height={16}
                style={{
                  marginRight: "0.5rem",
                }}
              />
              {user?.public_repos} repos
            </ButtonText>
          </Button>
          <Button>
            <ButtonText>
              <User width={16} height={16} />
              {user?.followers} followers
            </ButtonText>
          </Button>
          <Button>
            <ButtonText>
              <Wab321019
                width={16}
                height={16}
                style={{
                  marginRight: "0.5rem",
                }}
              />
              {user?.following} following
            </ButtonText>
          </Button>
        </Row>

        <Column
          style={{
            fontSize: "0.75rem",
          }}
        >
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
