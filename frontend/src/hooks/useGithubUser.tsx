import { useEffect, useState } from "react";
import githubService from "@/services/github.service";

export function useGithubUser(username: string) {
  const [user, setUser] = useState<Github.User>();

  useEffect(() => {
    function handleUserChange(userChanged: Github.User) {
      setUser(userChanged);
    }
    if (!username || user != null) return;
    githubService
      .getUser(username)
      .then((userChanged) => handleUserChange(userChanged));
  }, [username, user]);

  return user;
}

export function useGithubRepos(username: string) {
  const [repos, setRepos] = useState<Github.Repo[]>();

  useEffect(() => {
    function handleReposChange(reposChanged: Github.Repo[]) {
      setRepos(reposChanged);
    }

    if (!username || repos != null) return;
    githubService
      .getRepos(username)
      .then((reposChanged) => handleReposChange(reposChanged));
  }, [username, repos]);

  return repos;
}
