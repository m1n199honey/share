import axiosInstance from "..";

export const addLocation = (body) => {
  return axiosInstance.post("/api/location/add", body);
};

export const getAllLocation = () => {
  return axiosInstance.get("/api/location/get-all");
};

export const deleteLocation = (_id) => {
  return axiosInstance.delete(`/api/location/delete/${_id}`);
};

export const updateLocation = (_id, body) => {
  return axiosInstance.put(`/api/location/update/${_id}`, body);
};
