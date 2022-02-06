import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function QuestionListScreen() {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredQuestions = questions.filter((question) => (
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  const LIMIT = 10;
  const OFF_SET = 10;

  useEffect(() => {
    fetch(`https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions?limit=${LIMIT}&offset=${OFF_SET}&filter=${searchTerm}`)
      .then(async (response) => {
        const json = await response.json();
        setQuestions(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [searchTerm]);

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <S.Container>

      <S.InputSearchContainer>
        <input
          value={searchTerm}
          type="text"
          placeholder="Search a question"
          onChange={handleChangeSearchTerm}
        />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {filteredQuestions.length}
          {filteredQuestions.length === 1 ? ' question' : ' questions'}
        </strong>
        <Link to="/new">New Question</Link>
      </S.Header>

      {filteredQuestions.map((question) => (
        <S.Card key={question.id}>
          <div className="info">
            <div className="question-name">
              <strong>{question.question}</strong>
              <span>Choices:</span>
            </div>
            <div className="choice-list">
              {question.choices.map((choice) => (
                <li>
                  <span>{choice.choice}</span>
                  <span>{choice.votes}</span>
                </li>
              ))}
            </div>
          </div>
          <div className="actions">
            <Link to={`/questions/${question.id}`}>
              <img src={edit} alt="Edit" />
            </Link>
            <button
              type="button"
            >
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </S.Card>
      ))}

    </S.Container>
  );
}
