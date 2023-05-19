import { useEffect, useState } from "react";
import githubService from "@/services/github.service";


export function useGithubRepos(username: string) {
  const [repos, setRepos] = useState<Github.Repo[]>();

  useEffect(() => {
    function handleReposChange(reposChanged: Github.Repo[]) {
      setRepos(reposChanged);
    }

    if (!username || repos != null)
      return;
    githubService
      .getRepos(username)
      .then((reposChanged) => handleReposChange(reposChanged));
  }, [username, repos]);

  return repos;
}
