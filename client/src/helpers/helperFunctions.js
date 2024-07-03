/* eslint-disable no-useless-escape */
export const convertDate = (datetime) => {
  const parseDate = Date.parse(datetime);
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(parseDate);
};

export const validateUsername = (textInput) => {
  const userNameRegex = /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{7,24}$/g;
  const isValid = textInput.match(userNameRegex);
  return !!isValid;
};

export const validateEmail = (textInput) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const isValid = textInput.match(emailRegex);
  return !!isValid;
};

export const validatePassword = (textInput) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[{\]};:'",/?]).{8,}$/;
  const isValid = textInput.match(passwordRegex);
  return !!isValid;
};

export const getSessionStorage = (key) => {
  if (key) return sessionStorage.getItem(key);
};

export const setSessionStorage = (key, value) => {
  if (key && value) return sessionStorage.setItem(key, value);
  return console.log("error storing session value");
};
