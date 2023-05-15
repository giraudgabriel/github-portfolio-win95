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
}

export default new GithubService();