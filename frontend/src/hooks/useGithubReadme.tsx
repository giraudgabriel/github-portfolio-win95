import { useEffect, useState } from "react";
import githubService from "@/services/github.service";


export function useGithubReadme(username: string) {
  const [data, setData] = useState<string>();

  useEffect(() => {
    function handleUpdate(dataChanged: string) {
      setData(dataChanged);
    }

    if (!username || data != null)
      return;
    githubService
      .getReadme(username, username)
      .then((dataChanged) => handleUpdate(dataChanged));
  }, [username, data]);

  return data;
}
