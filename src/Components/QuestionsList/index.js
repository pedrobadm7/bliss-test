import * as S from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function QuestionsList() {
  return (
    <S.Container>
      <S.Header>
        <strong>3 Questions</strong>
        <a href="/">New Question</a>
      </S.Header>

      <S.ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Question</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <S.Card>
          <div className="info">
            <div className="question-name">
              <strong>Favourite programming language?</strong>
              <span>Choices:</span>
            </div>
            <div className="question-list">
              <li>
                <span>Swift</span>
                <span>Votes: 2048</span>
              </li>
              <li>
                <span>Python</span>
                <span>Votes: 1024</span>
              </li>
              <li>
                <span>Objective-C</span>
                <span>Votes: 512</span>
              </li>
              <li>
                <span>Ruby</span>
                <span>Votes: 256</span>
              </li>
            </div>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="question-name">
              <strong>Favourite programming language?</strong>
              <span>Choices:</span>
            </div>
            <div className="question-list">
              <li>
                <span>Swift</span>
                <span>Votes: 2048</span>
              </li>
              <li>
                <span>Python</span>
                <span>Votes: 1024</span>
              </li>
              <li>
                <span>Objective-C</span>
                <span>Votes: 512</span>
              </li>
              <li>
                <span>Ruby</span>
                <span>Votes: 256</span>
              </li>
            </div>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
          </div>
        </S.Card>
        <S.Card>
          <div className="info">
            <div className="question-name">
              <strong>Favourite programming language?</strong>
              <span>Choices:</span>
            </div>
            <div className="question-list">
              <li>
                <span>Swift</span>
                <span>Votes: 2048</span>
              </li>
              <li>
                <span>Python</span>
                <span>Votes: 1024</span>
              </li>
              <li>
                <span>Objective-C</span>
                <span>Votes: 512</span>
              </li>
              <li>
                <span>Ruby</span>
                <span>Votes: 256</span>
              </li>
            </div>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="" />
            </a>
          </div>
        </S.Card>
      </S.ListContainer>
    </S.Container>
  );
}
