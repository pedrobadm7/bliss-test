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
        { field: 'question', message: 'This field must be filled with a question' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== 'question'));
    }
  }

  function handleChoiceChange(event, fieldName) {
    const { value } = event.target;

    switch (fieldName) {
      case 'firstChoice':
        setFirstChoice(value);
        break;
      case 'secondChoice':
        setSecondChoice(value);
        break;
      case 'thirdChoice':
        setThirdChoice(value);
        break;
      case 'fourthChoice':
        setFourthChoice(value);
        break;
      default:
        break;
    }

    if (!value) {
      setErrors((prevState) => [
        ...prevState,
        { field: fieldName, message: 'This field must be filled with a choice' },
      ]);
    } else {
      setErrors((prevState) => prevState.filter((error) => error.field !== fieldName));
    }
  }

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

  function getErrorMessageByFieldName(fieldName) {
    return errors.find((error) => error.field === fieldName)?.message;
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('question')}>
        <Input
          placeholder="Question"
          error={getErrorMessageByFieldName('question')}
          value={question}
          onChange={handleQuestionChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('firstChoice')}>
        <Input
          placeholder="Choice 1"
          error={getErrorMessageByFieldName('firstChoice')}
          value={firstChoice}
          onChange={(event) => handleChoiceChange(event, 'firstChoice')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('secondChoice')}>
        <Input
          placeholder="Choice 2"
          error={getErrorMessageByFieldName('secondChoice')}
          value={secondChoice}
          onChange={(event) => handleChoiceChange(event, 'secondChoice')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('thirdChoice')}>
        <Input
          placeholder="Choice 3"
          error={getErrorMessageByFieldName('thirdChoice')}
          value={thirdChoice}
          onChange={(event) => handleChoiceChange(event, 'thirdChoice')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('fourthChoice')}>
        <Input
          placeholder="Choice 4"
          error={getErrorMessageByFieldName('fourthChoice')}
          value={fourthChoice}
          onChange={(event) => handleChoiceChange(event, 'fourthChoice')}
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
