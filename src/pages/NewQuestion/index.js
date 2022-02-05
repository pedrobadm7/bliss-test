import Button from '../../Components/Button';
import Input from '../../Components/Input';
import PageHeader from '../../Components/PageHeader';

export default function NewQuestion() {
  return (
    <>
      <PageHeader
        title="New Question"
      />
      <Input placeholder="Question" />
      <Input placeholder="Choice 1" />
      <Input placeholder="Choice 2" />
      <Input placeholder="Choice 3" />
      <Input placeholder="Choice 4" />
      <Button type="button">Save changes</Button>
      <Button type="button" disabled>Save changes</Button>
    </>
  );
}
