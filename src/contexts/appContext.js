import React, { createContext, useContext, useEffect, useState } from "react";
import { passwordGenerator, santaGenerator } from "utils/helpers";
import { getRegionFromIP, useSantaApi } from "queries";
import { useError } from "utils/hooks";
import { useNavigate } from "react-router-dom";
import { DeveloperModal } from "components";

export const AppContext = createContext();

const MainProvider = ({ children }) => {
 const [currentCompany, setCurrentCompany] = useState(null);
 const [sortedCompany, setSortedCompany] = useState(null);
 const [currentCompanyData, setCurrentCompanyData] = useState(null);
 const [savedValues, setSavedValues] = useState(null);
 const [currentModalValue, setCurrentModalValue] = useState(null);
 const [isShowModal, setShowModal] = useState(false);

 console.log(isShowModal);

 const modals = {
  developer: DeveloperModal,
 };
 const CurrentModal = modals[currentModalValue];

 const showModal = (value) => {
  setCurrentModalValue(value);
  setShowModal(true);
 };

 const isRussiaRegion = getRegionFromIP() === "RU";

 const { showError, isError, errorMessage } = useError();
 const navigate = useNavigate();
 const { post } = useSantaApi();

 getRegionFromIP();

 useEffect(() => {
  const { santaPairs } = santaGenerator(currentCompany || []);
  setSortedCompany(santaPairs);
 }, [currentCompany]);

 useEffect(() => {
  if (sortedCompany?.size) {
   const mapData = Array.from(sortedCompany.entries());

   const companyData = {
    company: currentCompany,
    pairs: mapData,
    password: passwordGenerator(),
   };

   const fetchData = async () => {
    try {
     const result = await post(companyData);
     setCurrentCompanyData(result);
     localStorage.setItem("company", JSON.stringify(result));
     navigate("/company-result");
    } catch (error) {
     showError("error.serverError");
    }
   };

   fetchData();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [sortedCompany]);

 const companyRegistration = (data) => {
  console.log(data);
  const names = data.map((item) => item.name);
  setCurrentCompany(names);
  setSavedValues(data);
 };

 const value = {
  showError,
  isError,
  errorMessage,
  companyRegistration,
  currentCompanyData,
  isRussiaRegion,
  currentCompany,
  savedValues,
  showModal,
  isShowModal,
  CurrentModal,
  setShowModal,
 };

 return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default MainProvider;

export const useAppContext = () => {
 return useContext(AppContext);
};
