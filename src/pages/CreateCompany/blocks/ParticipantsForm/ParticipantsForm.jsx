import { Form } from "components";
import { Button, Wrapper } from "ui";
import ParticipantsFormFields from "./ParticipantsFormFields";

const ParticipantsForm = ({ setFirstStep, setSecondStep, initValues }) => {
  const handleSetFirstStep = (event) => {
    event.preventDefault();
    setFirstStep(true);
    setSecondStep(false);
  };

  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form defaultValues={initValues} onSubmit={handleSubmit}>
      <Wrapper>
        <ParticipantsFormFields initValues={initValues} />
        <div
          style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
        >
          <Button
            variant="secondary"
            type="submit"
            onClick={handleSetFirstStep}
          >
            Back
          </Button>
          <Button type="submit">Next</Button>
        </div>
      </Wrapper>
    </Form>
  );
};

export default ParticipantsForm;
