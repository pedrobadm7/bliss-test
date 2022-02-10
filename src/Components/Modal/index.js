import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import * as S from './styles';

import Input from '../Input';
import FormGroup from '../FormGroup';

import Button from '../Button';
import QuestionsService from '../../services/QuestionsService';

function Modal({
  danger, title, isShown, hide, buttonLabel,
}) {
  const [email, setEmail] = useState('');
  const currentURL = window.location.href;

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // if (email) {
    //   const url = `${currentURL}?email=${email}`;
    //   window.open(url);
    //   hide();
    // }
    QuestionsService.shareQuestion(email, currentURL);
    setEmail('');
    hide();
  }

  return isShown && ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>{title}</h1>

        <S.Form>
          <FormGroup>
            <Input placeholder="Link" value={currentURL} disabled />
          </FormGroup>

          <FormGroup>
            <Input placeholder="Email" value={email} onChange={handleEmail} />
          </FormGroup>

          <S.Footer>
            <button type="button" className="cancel-button" onClick={hide}>
              Cancel
            </button>
            <Button type="submit" onClick={handleSubmit}>
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
