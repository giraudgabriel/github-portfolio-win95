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
}

export default new GithubService();