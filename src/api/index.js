import axios from "axios";

const baseUrl = "https://ucmiapp.herokuapp.com/api/";

export const sendFormData = async (data) => {
  const config = {
    method: "post",
    url: `${baseUrl}form/`,
    headers: {
      // "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    data,
  };

  return await axios(config);
};

export const sendNewsletter = async (emailaddress) => {
  const data = JSON.stringify({ emailaddress });

  const config = {
    method: "post",
    url: `${baseUrl}subscription/`,
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
    data,
  };

  return await axios(config);
};
