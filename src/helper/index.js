// import { API } from "../backend";
const token = localStorage.getItem("userToken");
export const GETALLLEADS = () => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/LeadsSummary`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

// import { API } from "../backend";

export const GETAPPLICATION = (id) => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/Applications/${id}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

export const getDocConfig = () => {
  return fetch(
    `http://dev-applicationservice.basichomeloan.com/api/v1/DocConfig/`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
};

export const addItem = (id, next) => {
  let user = [];
  if (typeof window !== undefined) {
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
  }

  user = JSON.parse(localStorage.getItem("user"));
  // localStorage.setItem("cart",JSON.stringify(cart))
  next();
};

export const removeItem = (id) => {
  let user = {};
  if (typeof window !== undefined) {
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
    var id = localStorage.getItem("id");
    var accepted = localStorage.getItem("Accepted");
    var notaccepted = localStorage.getItem("NotAccepted");
  }
  localStorage.setItem(
    "user",
    JSON.stringify({
      id: id,
      accepted: "true",
      notaccepted: "true",
    })
  );
  // localStorage.setItem("cart",JSON.stringify(cart))
  return user;
};

export const loadCart = () => {
  if (typeof window !== undefined) {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user"));
    }
  }
};

export const cartEmpty = (next) => {
  if (typeof window !== undefined) {
    localStorage.removeItem("user");
    next();
  }
};
