import axiosInstance from "..";

export const addCity = (body) => {
  return axiosInstance.post("/api/city/add", body);
};

export const getAllCity = () => {
  return axiosInstance.get("/api/city/get-all");
};

export const deleteCity = (_id) => {
  return axiosInstance.delete(`/api/city/delete/${_id}`);
};

export const updateCity = (_id, body) => {
  return axiosInstance.put(`/api/city/update/${_id}`, body);
};
