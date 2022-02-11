import PageHeader from '../../Components/PageHeader';
import QuestionForm from '../../Components/QuestionForm';

export default function NewQuestion() {
  return (
    <>
      <PageHeader
        title="New Question"
      />
      <QuestionForm
        buttonLabel="Create"
      />
    </>
  );
}
