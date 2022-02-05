import PageHeader from '../../Components/PageHeader';
import QuestionForm from '../../Components/QuestionForm';

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
