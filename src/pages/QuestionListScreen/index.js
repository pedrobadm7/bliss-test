/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import { Link } from 'react-router-dom';
import {
  useEffect, useState, useMemo, useCallback,
} from 'react';
import * as S from './styles';

import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';
import sad from '../../assets/images/icons/sad.svg';
import box from '../../assets/images/icons/box.svg';
import magnifierQuestion from '../../assets/images/icons/magnifierQuestion.svg';

import Loader from '../../components/Loader';
import Button from '../../components/Button';
import QuestionsService from '../../services/QuestionsService';
import InputSearchContainer from '../../components/InputSearchContainer';

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

  function handleTryAgain() {
    loadQuestions();
  }

  return (
    <S.Container>
      <Loader isLoading={isLoading} />

      {questions.length > 0 && (
      <InputSearchContainer
        value={searchTerm}
        onChange={(search) => setSearchTerm(search)}
        questions={questions}
        filteredQuestions={filteredQuestions}
      />

      )}

      <S.Header
        justifyContent={
          hasError
            ? 'flex-end'
            : (
              questions.length > 0
                ? 'space-between'
                : 'center'
            )
        }
      >
        {(!hasError && questions.length > 0) && (
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
          {questions.length < 1 && !isLoading && (
          <S.EmptyListContainer>
            <img src={box} alt="Box" />

            <p>
              You don&apos;t have any questions registered yet!
              Click on the <strong> &quot;New question&quot; </strong>
              button above to register your first one!
            </p>
          </S.EmptyListContainer>
          )}

          {(questions.length > 0 && filteredQuestions < 1) && (
            <S.SearchNotFoundContainer>
              <img src={magnifierQuestion} alt="Magnifier Question" />

              <span>No results were found for <strong>&quot;{searchTerm}&quot;</strong>.</span>
            </S.SearchNotFoundContainer>
          )}

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
                <Link to={
                  {
                    pathname: `/questions/${question.id}`,
                    state: {
                      item: question,
                    },
                  }
                }
                >
                  <img src={edit} alt="Detail Screen" />
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
