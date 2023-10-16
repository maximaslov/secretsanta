import {useState } from "react";
import { ParticipantsForm, ParticipantsNumber } from "./blocks";

const CreateCompany = () => {
  const [isFirstStep, setFirstStep] = useState(true);
  const [isSecondStep, setSecondStep] = useState(false);
  const [initValues, setInitValues] = useState({});
  const [participantsNumber, setPartcipiantsNumber] = useState('')

  const params = {
    setFirstStep,
    setSecondStep,
    initValues, 
    setInitValues,
    setPartcipiantsNumber,
    participantsNumber
  };
  
  if (isFirstStep) {
    return <ParticipantsNumber {...params} />;
  }

  if (isSecondStep) {
    return <ParticipantsForm {...params}/>
  }

};

export default CreateCompany;
