import HttpClient from './utils/HttpClient';

class QuestionsService {
  constructor() {
    this.httpClient = new HttpClient('https://private-bbbe9-blissrecruitmentapi.apiary-mock.com');
  }

  async listQuestions(LIMIT, OFF_SET, searchTerm = '') {
    return this.httpClient.get(`/questions?limit=${LIMIT}&offset=${OFF_SET}&filter=${searchTerm}`);
  }
}

export default new QuestionsService();
