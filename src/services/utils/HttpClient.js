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

  async post(path, data) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const body = await response.json();

    if (response.ok) {
      return body;
    }

    throw new Error(
      `Couldn't post data to server: ${response.status}`,
    );
  }

  async put(path) {
    const response = await fetch(`${this.baseURL}${path}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });

    const body = await response.json();

    if (response.ok) {
      return body;
    }

    throw new Error(
      `Couldn't put data to server: ${response.status}`,
    );
  }
}

export default HttpClient;
