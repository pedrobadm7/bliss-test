import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';
import * as S from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

import Loader from '../../Components/Loader';

export default function QuestionListScreen() {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const filteredQuestions = useMemo(() => questions.filter((question) => (
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  )), [questions, searchTerm]);

  const LIMIT = 10;
  const OFF_SET = 10;

  useEffect(() => {
    async function loadQuestions() {
      try {
        setIsLoading(true);
        const response = await fetch(`https://private-bbbe9-blissrecruitmentapi.apiary-mock.com/questions?limit=${LIMIT}&offset=${OFF_SET}&filter=${searchTerm}`);

        const json = await response.json();
        setQuestions(json);
      } catch (error) {
        console.log('error: ', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadQuestions();
  }, [searchTerm]);

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

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
