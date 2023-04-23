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
