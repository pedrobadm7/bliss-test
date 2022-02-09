/* eslint-disable react/destructuring-assignment */
import propTypes from 'prop-types';
import { useState } from 'react';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';

import * as S from './styles';

export default function DetailScreen(props) {
  const { item } = props.location.state;

  const [getChoices, setGetChoices] = useState([...item.choices]);
  const [isVoted, setIsVoted] = useState(false);

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
      return newChoices;
    });
  }

  return (
    <S.Container>
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

      <Button type="button">
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
