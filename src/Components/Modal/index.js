import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import useErrors from '../../hooks/useErrors';
import * as S from './styles';

import Input from '../Input';
import FormGroup from '../FormGroup';

import Button from '../Button';
import QuestionsService from '../../services/QuestionsService';
import isEmailValid from '../../utils/isEmailValid';

function Modal({
  danger, title, isShown, hide, buttonLabel,
}) {
  const [email, setEmail] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useErrors();

  const isFormValid = errors.length === 0 && isEmailValid(email);

  const currentURL = window.location.href;

  function handleEmail(event) {
    setEmail(event.target.value);

    if ((event.target.value && !isEmailValid(event.target.value)) || !event.target.value) {
      setError({ field: 'email', message: 'You should provide a valid email' });
    } else {
      removeError('email');
    }
  }

  function handleCancel() {
    hide();
    removeError('email');
    setEmail('');
  }

  function handleSubmit(event) {
    event.preventDefault();
    QuestionsService.shareQuestion(email, currentURL);
    setEmail('');
    hide();
  }

  return isShown && ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>{title}</h1>

        <S.Form onSubmit={handleSubmit}>
          <FormGroup>
            <Input placeholder="Link" value={currentURL} disabled />
          </FormGroup>

          <FormGroup error={getErrorMessageByFieldName('email')}>
            <Input placeholder="Email" value={email} onChange={handleEmail} error={getErrorMessageByFieldName('email')} />
          </FormGroup>

          <S.Footer>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
            <Button type="submit" disabled={!isFormValid}>
              {buttonLabel}
            </Button>
          </S.Footer>
        </S.Form>

      </S.Container>
    </S.Overlay>,
    document.getElementById('modal-root'),
  );
}

export default Modal;

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  isShown: PropTypes.bool.isRequired,
  hide: PropTypes.bool.isRequired,
  buttonLabel: PropTypes.string.isRequired,

};

Modal.defaultProps = {
  danger: false,
};
