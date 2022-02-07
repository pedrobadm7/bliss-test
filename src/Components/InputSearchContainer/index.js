import propTypes from 'prop-types';
import { useState } from 'react';

import useDebounce from '../../hooks/useDebounce';

import * as S from './styles';

export default function InputSearchContainer({ value, onChange }) {
  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(event) {
    setDisplayValue(event.target.value);
    debouncedChange(event.target.value);
  }

  return (
    <S.InputSearchContainer>
      <input
        value={displayValue}
        type="text"
        placeholder="Search a question"
        onChange={handleChange}
      />
    </S.InputSearchContainer>

  );
}

InputSearchContainer.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};
