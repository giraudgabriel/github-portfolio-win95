class GithubService {

  baseUrl: string;

  constructor() {
    this.baseUrl = 'https://api.github.com';
  }

  async getUser(username: string) {
    const response = await fetch(`${this.baseUrl}/users/${username}`);
    const data = await response.json();
    return data as Github.User;
  }

  async getRepos(username: string) {
    const response = await fetch(`${this.baseUrl}/users/${username}/repos`);
    const data = await response.json();
    return data as Github.Repo[];
  }

  async getReadme(username: string, repoName: string) {
    const response = await fetch(`https://raw.githubusercontent.com/${username}/${repoName}/master/README.md`);
    const data = await response.text();
    return data;
  }

  getUsername() {
    return import.meta.env.VITE_GITHUB_USERNAME;
  }
}

export default new GithubService();