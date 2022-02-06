import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import * as S from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/icons/sad.svg';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import QuestionsService from '../../services/QuestionsService';

export default function QuestionListScreen() {
  const [questions, setQuestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const filteredQuestions = useMemo(() => questions.filter((question) => (
    question.question.toLowerCase().includes(searchTerm.toLowerCase())
  )), [questions, searchTerm]);

  const LIMIT = 10;
  const OFF_SET = 10;

  const loadQuestions = useCallback(async () => {
    try {
      setIsLoading(true);

      const questionsList = await QuestionsService.listQuestions(LIMIT, OFF_SET, searchTerm);

      setHasError(false);
      setQuestions(questionsList);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadQuestions();
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

      <S.Header hasError={hasError}>
        {!hasError && (
        <strong>
          {filteredQuestions.length}
          {filteredQuestions.length === 1 ? ' question' : ' questions'}
        </strong>
        )}
        <Link to="/new">New Question</Link>
      </S.Header>

      {hasError && (
        <S.ErrorContainer>
          <img src={sad} alt="Sad" />

          <div className="details">

            <strong>Ooops, an error occurred while trying to find your questions</strong>

            <Button type="button" onClick={handleTryAgain}>Try again</Button>
          </div>
        </S.ErrorContainer>
      )}

      {!hasError && (
        <>
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
        </>
      )}

    </S.Container>
  );
}
