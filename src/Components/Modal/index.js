import PropTypes from 'prop-types';
import * as S from './styles';

import Button from '../Button';

export default function Modal({ danger }) {
  return (
    <S.Overlay>
      <S.Container danger={danger}>
        <h1>Modal title</h1>
        <p>Modal body</p>

        <S.Footer>
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <Button type="button" danger={danger}>
            Delete
          </Button>
        </S.Footer>

      </S.Container>
    </S.Overlay>
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
