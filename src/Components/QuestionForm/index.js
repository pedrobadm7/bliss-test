import PropTypes from 'prop-types';
import FormGroup from '../FormGroup';
import * as S from './styles';

import Input from '../Input';
import Button from '../Button';

export default function QuestionForm({ buttonLabel }) {
  return (
    <S.Form>
      <FormGroup>
        <Input placeholder="Question" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Choice 1" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Choice 2" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Choice 3" />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Choice 4" />
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
