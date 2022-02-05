import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
// import Loader from '../../Components/Loader';
// import Modal from '../../Components/Modal';

export default function QuestionListScreen() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions?limit=10&offset=10')
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
      {/* <Modal danger /> */}
      {/* <Loader /> */}

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

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Question</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

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

      </S.ListContainer>
    </S.Container>
  );
}
