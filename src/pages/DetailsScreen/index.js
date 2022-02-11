/* eslint-disable react/destructuring-assignment */

import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../../Components/Button';
import Loader from '../../Components/Loader';
import Modal from '../../Components/Modal';
import PageHeader from '../../Components/PageHeader';
import { useModal } from '../../hooks/useModal';
import QuestionsService from '../../services/QuestionsService';

import sad from '../../assets/images/icons/sad.svg';

import * as S from './styles';

export default function DetailScreen() {
  const { id } = useParams();
  const [question, setQuestion] = useState({});

  const [getChoices, setGetChoices] = useState([]);
  const [isVoted, setIsVoted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const loadQuestionById = useCallback(async () => {
    try {
      setIsLoading(true);
      const questionById = await QuestionsService.listQuestionById(id);

      setHasError(false);
      setQuestion(questionById);
      setGetChoices([...questionById.choices]);
    } catch {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadQuestionById();
  }, [loadQuestionById]);

  function handleTryAgain() {
    loadQuestionById();
  }

  const { isShown, toggle } = useModal();

  function handleVote(choiceName) {
    setGetChoices((prevChoices) => {
      const newChoices = [...prevChoices].map((choice) => {
        const isChoiceClicked = choice.choice === choiceName;
        if (isChoiceClicked) {
          setIsVoted((prevState) => !prevState);
          return {
            ...choice,
            votes: choice.votes + 1,
          };
        }
        return choice;
      });
      QuestionsService.updateQuestion({
        ...question,
        choices: newChoices,
      });
      return newChoices;
    });
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && (
        <S.Container isShown={isShown}>
          <Modal
            title="Share with your friends!"
            isShown={isShown}
            hide={toggle}
            buttonLabel="Share!"
          />

          {!hasError && (
            <>
              <PageHeader title={question.question} />
              {getChoices.map((choice) => (
                <S.Card>
                  <Button
                    type="button"
                    onClick={() => handleVote(choice.choice)}
                    disabled={isVoted}
                  >
                    {choice.choice}
                  </Button>
                  <p>
                    Number of votes:
                    {' '}
                    {choice.votes}
                  </p>
                </S.Card>
              ))}

              <Button type="button" onClick={toggle}>
                Share screen
              </Button>
            </>

          )}

          {hasError && (
          <S.ErrorContainer>
            <img src={sad} alt="Sad" />

            <div className="details">

              <strong>Ooops, an error occurred while trying to find your questions</strong>

              <Button type="button" onClick={handleTryAgain}>Try again</Button>
            </div>
          </S.ErrorContainer>
          )}
        </S.Container>
      )}
    </>
  );
}
