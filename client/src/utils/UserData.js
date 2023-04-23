const url = "https://miles-node-ptu.onrender.com";
export const getmybooking = () => {
  return fetch(`${url}/user/getcars`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
export const editbookingdetails = (id) => {
  return fetch(`${url}/user/get/${id}`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
export const postbookingdetails = () => {
  return fetch(`${url}/user/mybookings`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
export const getbookingdetails = () => {
  return fetch(`${url}/user/getbookingdetails`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
export const updatebookingdetails = (id) => {
  return fetch(`${url}/user/updatebooking/${id}`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
export const updatemybooking = (id) => {
  return fetch(`${url}/user/update/${id}`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
export const deletemybooking = (id) => {
  return fetch(`${url}/user/mybookings/${id}`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
export const postbookingdeatils = () => {
  return fetch(`${url}/user/bookingdetails`, {
    headers: {
      "authorization": JSON.parse(localStorage.getItem("userToken")),
    },
  })
    .then((res) => res.json())
    .catch((err) => alert(err.message));
};
