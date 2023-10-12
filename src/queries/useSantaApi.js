import axios from "axios";

const URL = "https://6394a82986829c49e8236d0d.mockapi.io/secretsanta/";

// export const SantaApi = {
//     post(company) {
//         return axios.post(URL, company);
//     },
//     get(companyId) {
//         return axios.get(URL+companyId);
//     },
// }

export const useSantaApi = () => {
  const post = (company) => {
    return axios.post(URL, company);
  };
  const get = (companyId) => {
    return axios.get(URL + companyId);
  };
  return { post, get };
};
