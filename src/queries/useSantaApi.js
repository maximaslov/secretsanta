import axios from "axios";

const URL = "https://65834ef34d1ee97c6bcdcecc.mockapi.io/secretsanta/";

export const useSantaApi = () => {
 const post = async (company) => {
  const response = await axios.post(URL, company);
  return response.data;
 };

 const get = async (companyId) => {
  const response = await axios.get(URL + companyId);
  return response.data;
 };

 const del = async (companyId) => {
  const response = await axios.delete(URL + companyId);
  return response.data;
 };

 const put = async (companyId, data) => {
  const response = await axios.put(URL + companyId, data);
  return response.data;
 };
 return { post, get, del, put };
};
