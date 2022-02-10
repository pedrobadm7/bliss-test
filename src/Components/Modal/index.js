import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import * as S from './styles';

import Input from '../Input';
import FormGroup from '../FormGroup';

import Button from '../Button';

function Modal({
  danger, title, isShown, hide, buttonLabel,
}) {
  const currentURL = window.location.href;

  return isShown && ReactDOM.createPortal(
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>{title}</h1>

        <S.Form>
          <FormGroup>
            <Input placeholder="Link" value={currentURL} disabled />
          </FormGroup>

          <FormGroup>
            <Input placeholder="Email" />
          </FormGroup>

          <S.Footer>
            <button type="button" className="cancel-button" onClick={hide}>
              Cancel
            </button>
            <Button type="submit">
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
