/* eslint-disable react/destructuring-assignment */
import propTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import PageHeader from '../../components/PageHeader';
import { useModal } from '../../hooks/useModal';
import QuestionsService from '../../services/QuestionsService';

import * as S from './styles';

export default function DetailScreen(props) {
  const { item } = props.location.state;

  const [getChoices, setGetChoices] = useState([...item.choices]);
  const [isVoted, setIsVoted] = useState(false);

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
        ...item,
        choices: newChoices,
      });
      return newChoices;
    });
  }

  return (
    <S.Container isShown={isShown}>
      <Modal
        title="Share with your friends!"
        isShown={isShown}
        hide={toggle}
        buttonLabel="Share!"

      />

      <PageHeader title={item.question} />
      {getChoices.map((choice) => (
        <S.Card>
          <Button
            type="button"
            onClick={() => handleVote(choice.choice)}
            disabled={
            isVoted
          }
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
    </S.Container>
  );
}

DetailScreen.propTypes = {
  location: propTypes.shape({
    state: propTypes.shape({
      item: propTypes.shape({
        id: propTypes.number,
        image_url: propTypes.string,
        published_at: propTypes.string,
        thumb_url: propTypes.string,
        question: propTypes.string,
        choices: propTypes.arrayOf(
          propTypes.shape({
            choice: propTypes.string,
            votes: propTypes.number,
          }),
        ),
      }),
    }),
  }).isRequired,

};
