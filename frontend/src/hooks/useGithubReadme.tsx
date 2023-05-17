import { useEffect, useState } from "react";
import githubService from "@/services/github.service";

export function useGithubReadme(username: string) {
  const [data, setData] = useState<string | null>();

  useEffect(() => {
    function handleUpdate(dataChanged: string | null) {
      setData(dataChanged);
    }

    if (!username) return;
    githubService
      .getReadme(username, username)
      .then((dataChanged) => handleUpdate(dataChanged));
  }, [username]);

  return data;
}
