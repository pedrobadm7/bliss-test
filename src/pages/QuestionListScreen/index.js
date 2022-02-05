import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function QuestionListScreen() {
  const [questions, setQuestions] = useState([]);

  const LIMIT = 10;
  const OFF_SET = 10;

  useEffect(() => {
    fetch(`https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions?limit=${LIMIT}&offset=${OFF_SET}&filter`)
      .then(async (response) => {
        const json = await response.json();
        setQuestions(json);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, []);

  return (
    <S.Container>

      <S.InputSearchContainer>
        <input type="text" placeholder="Search a question" />
      </S.InputSearchContainer>

      <S.Header>
        <strong>
          {questions.length}
          {questions.length === 1 ? ' question' : ' questions'}
        </strong>
        <Link to="/new">New Question</Link>
      </S.Header>

      {questions.map((question) => (
        <S.Card key={question.id}>
          <div className="info">
            <div className="question-name">
              <strong>{question.question}</strong>
              <span>Choices:</span>
            </div>
            <div className="choice-list">
              {question.choices.map((choice) => (
                <li key={choice.index}>
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
