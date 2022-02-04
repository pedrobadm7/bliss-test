import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Header from '../Header';
import QuestionsList from '../QuestionsList';

import * as S from './styles';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.Container>
        <GlobalStyles />
        <Header />
        <QuestionsList />
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
