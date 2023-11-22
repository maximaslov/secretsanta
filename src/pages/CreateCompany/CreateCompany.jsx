import { useState } from "react";
import { ParticipantsForm, ParticipantsNumber } from "./blocks";

const CreateCompany = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("company");
  const [currentStep, setCurrentStep] = useState(1);
  const [initValues, setInitValues] = useState({});
  const [participantsNumber, setPartcipiantsNumber] = useState('')

  const params = {
    setCurrentStep,
    initValues, 
    setInitValues,
    setPartcipiantsNumber,
    participantsNumber
  };
  
  if (currentStep === 1) {
    return <ParticipantsNumber {...params} />;
  }

  if (currentStep === 2) {
    return <ParticipantsForm {...params}/>
  }

};

export default CreateCompany;
