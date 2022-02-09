/* eslint-disable camelcase */
import HttpClient from './utils/HttpClient';

class QuestionsService {
  constructor() {
    this.httpClient = new HttpClient('https://private-bbbe9-blissrecruitmentapi.apiary-mock.com');
  }

  async listQuestions(LIMIT, OFF_SET, searchTerm = '') {
    return this.httpClient.get(`/questions?limit=${LIMIT}&offset=${OFF_SET}&filter=${searchTerm}`, '/health');
  }

  async createQuestion({
    id, question, choices,
  }) {
    return this.httpClient.post('/questions', {
      id, question, choices,
    });
  }

  async updateQuestion({
    id, image_url, published_at, thumb_url, question, choices,
  }) {
    return this.httpClient.put(`/questions/${id}`, {
      id, image_url, published_at, thumb_url, question, choices,
    });
  }
}

export default new QuestionsService();
