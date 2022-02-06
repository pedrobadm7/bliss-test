import PageHeader from '../../components/PageHeader';
import QuestionForm from '../../components/QuestionForm';

export default function DetailsScreen() {
  return (
    <>
      <PageHeader
        title="Edit 'Favourite programming language?'"
      />
      <QuestionForm
        buttonLabel="Save updates"
      />
    </>
  );
}
