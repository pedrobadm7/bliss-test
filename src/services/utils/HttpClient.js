class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(path, serverHealthPath) {
    const responseHealth = await fetch(`${this.baseURL}${serverHealthPath}`);
    const response = await fetch(`${this.baseURL}${path}`);

    const body = await response.json();

    if (responseHealth.ok && response.ok) {
      return body;
    }

    throw new Error(
      `Server health check failed: ${responseHealth.status}`,
    );
  }
}

export default HttpClient;
