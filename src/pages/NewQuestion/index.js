import PageHeader from '../../components/PageHeader';
import QuestionForm from '../../components/QuestionForm';

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
