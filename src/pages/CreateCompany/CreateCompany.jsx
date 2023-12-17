import { useEffect, useState } from "react";
import { ParticipantsForm, ParticipantsNumber } from "./blocks";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppContext } from "contexts";

const CreateCompany = () => {
 const navigate = useNavigate();
 const { state } = useLocation();
 const isBackStep = state && state.isBackStep;
 const { savedValues } = useAppContext();
 localStorage.removeItem("name");
 localStorage.removeItem("company");
 const [currentStep, setCurrentStep] = useState(1);
 const [initValues, setInitValues] = useState();
 const [participantsNumber, setPartcipiantsNumber] = useState("");

 const params = {
  setCurrentStep,
  initValues,
  setInitValues,
  setPartcipiantsNumber,
  participantsNumber,
  isBackStep,
 };

 useEffect(() => {
  if (isBackStep) {
   setInitValues({ names: savedValues });
   setCurrentStep(2);
  }
 }, [isBackStep, setCurrentStep, savedValues]);

 useEffect(() => {
  const handleBeforeUnload = (event) => {
   localStorage.setItem("reloadFlag", "true");
   event.preventDefault();
  };

  if (localStorage.getItem("reloadFlag") === "true") {
   localStorage.setItem("reloadFlag", "false");
   navigate("/");
  }

  window.addEventListener("unload", handleBeforeUnload);

  return () => {
   window.removeEventListener("unload", handleBeforeUnload);
  };
 }, [navigate]);

 if (currentStep === 1) {
  return <ParticipantsNumber {...params} />;
 }

 if (currentStep === 2) {
  return <ParticipantsForm {...params} />;
 }
};

export default CreateCompany;
