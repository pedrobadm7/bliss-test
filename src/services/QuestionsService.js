class QuestionsService {
  async listQuestions(LIMIT, OFF_SET, searchTerm = '') {
    const response = await fetch(`https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions?limit=${LIMIT}&offset=${OFF_SET}&filter=${searchTerm}`);

    return response.json();
  }
}

export default new QuestionsService();
