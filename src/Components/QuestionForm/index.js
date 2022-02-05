import { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import * as S from './styles';

import Input from '../Input';
import Button from '../Button';

export default function QuestionForm({ buttonLabel }) {
  const [question, setQuestion] = useState('');
  const [firstChoice, setFirstChoice] = useState('');
  const [secondChoice, setSecondChoice] = useState('');
  const [thirdChoice, setThirdChoice] = useState('');
  const [fourthChoice, setFourthChoice] = useState('');
  const [errors, setErrors] = useState([]);

  function handleQuestionChange(event) {
    setQuestion(event.target.value);

    if (!event.target.value) {
      setErrors((prevState) => [
        ...prevState,
        { field: 'question', message: 'This field must be filled' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'question'));
    }
  }

  console.log({ errors });

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      question,
      firstChoice,
      secondChoice,
      thirdChoice,
      fourthChoice,
    });
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <FormGroup>
        <Input
          placeholder="Question"
          value={question}
          onChange={handleQuestionChange}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Choice 1"
          value={firstChoice}
          onChange={(event) => setFirstChoice(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Choice 2"
          value={secondChoice}
          onChange={(event) => setSecondChoice(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Choice 3"
          value={thirdChoice}
          onChange={(event) => setThirdChoice(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Input
          placeholder="Choice 4"
          value={fourthChoice}
          onChange={(event) => setFourthChoice(event.target.value)}
        />
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

QuestionForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
