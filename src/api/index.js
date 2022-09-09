import axios from "axios";

const baseUrl = "https://ucmiapp.herokuapp.com/api/";

export const sendFormData = async (formData) => {
  // const formData =
};

export const sendNewsletter = async (emailaddress) => {
  const data = JSON.stringify({ emailaddress });

  const config = {
    method: "post",
    url: `${baseUrl}subscription`,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  return await axios(config);
};
