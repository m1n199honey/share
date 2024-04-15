import axiosInstance from "..";

export const addLegal = (body) => {
  return axiosInstance.post("/api/legal/add", body);
};

export const getLegal = (legal_type) => {
  return axiosInstance.get(`/api/legal/get-by-type?legal_type=${legal_type}`);
};

export const updateLegal = (_id, body) => {
  return axiosInstance.put(`/api/legal/update/${_id}`, body);
};
