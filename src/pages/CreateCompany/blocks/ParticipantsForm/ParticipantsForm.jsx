import { Form } from "components";
import { Button, Input, Wrapper } from "ui";
import Fields from "./Fields";

const ParticipantsForm = ({ setFirstStep, setSecondStep, initValues }) => {
  // const handleSetFirstStep = () => {
  //   setFirstStep(true);
  //   setSecondStep(false);
  // };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form defaultValues={initValues} onSubmit={handleSubmit}>
      <Wrapper>
        <Fields initValues={initValues} />
        <Button type="submit">Click</Button>
      </Wrapper>
    </Form>
  );
};

export default ParticipantsForm;
