import axios from "axios";

const URL = "https://6394a82986829c49e8236d0d.mockapi.io/secretsanta/";

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
 }

 return { post, get, del };
};