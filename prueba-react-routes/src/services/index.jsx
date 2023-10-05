import axios from "axios";

const handleApiRequest = (method, endpoint, data, token = '') => {
  const url = "https://todos.simpleapi.dev/api";
  const key = "b254ce3f-1a4d-42cd-b92a-f7fca45efce6";

  // console.log(process.env.REACT_APP_API_URL)
  // console.log("hola")

  return axios({
    method,
    // url: `${process.env.REACT_APP_API_URL}/users${endpoint}?apikey=${process.env.REACT_APP_PUBLIC_API_KEY}`,
    url: `${url}/users${endpoint}?apikey=${key}`,
   
    data: {
      ...data,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default handleApiRequest;
