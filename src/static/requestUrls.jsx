import secureLocalStorage from "react-secure-storage";

export const getToken = () => {
  const token = JSON.parse(secureLocalStorage.getItem("token")); // FROM STORAGE
  return token;
};

export const setToken = (token) => {
  secureLocalStorage.setItem("token", JSON.stringify(token));
};

export const getComplaintNo = () => {
  const complaintNo = JSON.parse(sessionStorage.getItem("complaintNo")); // FROM STORAGE
  return complaintNo;
};

export const setComplaintNo = (complaintNo) => {
  sessionStorage.setItem("complaintNo", JSON.stringify(complaintNo));
};

export const setComplaintPerson = (person) => {
  sessionStorage.setItem("complaintPerson", JSON.stringify(person));
};

export const getComplaintPerson = () => {
  const complaintPerson = sessionStorage.getItem("complaintPerson"); // FROM STORAGE
  if (complaintPerson) {
    return JSON.parse(complaintPerson);
  } else {
    return null;
  }
};
