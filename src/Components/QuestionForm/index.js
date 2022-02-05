import { useState } from 'react';
import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import * as S from './styles';

import Input from '../Input';
import Button from '../Button';

import useErrors from '../../hooks/useErrors';

export default function QuestionForm({ buttonLabel }) {
  const [question, setQuestion] = useState('');
  const [firstChoice, setFirstChoice] = useState('');
  const [secondChoice, setSecondChoice] = useState('');
  const [thirdChoice, setThirdChoice] = useState('');
  const [fourthChoice, setFourthChoice] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = question
  && firstChoice
  && secondChoice
  && thirdChoice
  && fourthChoice
  && errors.length === 0;

  function handleQuestionChange(event) {
    setQuestion(event.target.value);

    if (!event.target.value) {
      setError({ field: 'question', message: 'This field must be filled with a question' });
    } else {
      removeError('question');
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
      setError({ field: fieldName, message: 'This field must be filled with a choice' });
    } else {
      removeError(fieldName);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log({
    //   question,
    //   firstChoice,
    //   secondChoice,
    //   thirdChoice,
    //   fourthChoice,
    // });
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <FormGroup error={getErrorMessageByFieldName('question')}>
        <Input
          placeholder="Question *"
          error={getErrorMessageByFieldName('question')}
          value={question}
          onChange={handleQuestionChange}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('firstChoice')}>
        <Input
          placeholder="Choice 1 *"
          error={getErrorMessageByFieldName('firstChoice')}
          value={firstChoice}
          onChange={(event) => handleChoiceChange(event, 'firstChoice')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('secondChoice')}>
        <Input
          placeholder="Choice 2 *"
          error={getErrorMessageByFieldName('secondChoice')}
          value={secondChoice}
          onChange={(event) => handleChoiceChange(event, 'secondChoice')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('thirdChoice')}>
        <Input
          placeholder="Choice 3 *"
          error={getErrorMessageByFieldName('thirdChoice')}
          value={thirdChoice}
          onChange={(event) => handleChoiceChange(event, 'thirdChoice')}
        />
      </FormGroup>

      <FormGroup error={getErrorMessageByFieldName('fourthChoice')}>
        <Input
          placeholder="Choice 4 *"
          error={getErrorMessageByFieldName('fourthChoice')}
          value={fourthChoice}
          onChange={(event) => handleChoiceChange(event, 'fourthChoice')}
        />
      </FormGroup>

      <S.ButtonContainer>
        <Button type="submit" disabled={!isFormValid}>
          {buttonLabel}
        </Button>
      </S.ButtonContainer>
    </S.Form>
  );
}

QuestionForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
