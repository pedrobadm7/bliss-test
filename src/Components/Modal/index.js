import * as S from './styles';

import Button from '../Button';

export default function Modal() {
  return (
    <S.Overlay>
      <S.Container>
        <h1>Modal title</h1>
        <p>Modal body</p>

        <S.Footer>
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <Button type="button">
            Delete
          </Button>
        </S.Footer>

      </S.Container>
    </S.Overlay>
  );
}
