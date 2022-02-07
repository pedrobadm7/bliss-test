import propTypes from 'prop-types';
import { useState } from 'react';

import useDebounce from '../../hooks/useDebounce';
import Button from '../Button';

import * as S from './styles';

export default function InputSearchContainer({
  value, onChange, questions, filteredQuestions,
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  function handleClearInput() {
    setDisplayValue('');
    onChange('');
  }

  return (
    <S.InputSearchContainer>
      <input
        value={displayValue}
        type="text"
        placeholder="Search a question"
        onChange={handleChange}
      />
      {displayValue && (questions.length > 0 && filteredQuestions < 1) && (
        <Button
          type="button"
          onClick={handleClearInput}
        >
          Apagar busca
        </Button>
      )}
    </S.InputSearchContainer>

  );
}

InputSearchContainer.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  questions: propTypes.string.isRequired,
  filteredQuestions: propTypes.arrayOf(propTypes.shape({
    question: propTypes.string.isRequired,
  })).isRequired,
};
