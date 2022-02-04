import { Switch, Route } from 'react-router-dom';
import DetailsScreen from './pages/DetailsScreen';
import NewQuestion from './pages/NewQuestion';
import QuestionListScreen from './pages/QuestionListScreen';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={QuestionListScreen} />
      <Route path="/new" component={NewQuestion} />
      <Route path="/questions/:id" component={DetailsScreen} />
    </Switch>
  );
}
