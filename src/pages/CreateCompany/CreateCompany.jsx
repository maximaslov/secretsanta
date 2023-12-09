import { useEffect, useState } from "react";
import { ParticipantsForm, ParticipantsNumber } from "./blocks";
import { useNavigate } from "react-router-dom";

const CreateCompany = () => {
 const navigate = useNavigate();
 localStorage.removeItem("name");
 localStorage.removeItem("company");
 const [currentStep, setCurrentStep] = useState(1);
 const [initValues, setInitValues] = useState({});
 const [participantsNumber, setPartcipiantsNumber] = useState("");

 const params = {
  setCurrentStep,
  initValues,
  setInitValues,
  setPartcipiantsNumber,
  participantsNumber,
 };

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
