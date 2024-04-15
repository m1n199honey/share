import axiosInstance from "..";

export const addPricing = (body) => {
  return axiosInstance.post("/api/pricing/add", body);
};

export const getPricings = () => {
  return axiosInstance.get(`/api/pricing/get-all`);
};

export const updatePricing = (_id, body) => {
  return axiosInstance.put(`/api/pricing/update/${_id}`, body);
};

export const deletePricing = (_id) => {
  return axiosInstance.delete(`/api/pricing/delete/${_id}`);
};

export const addHowItWorks = (body) => {
  return axiosInstance.post("/api/pricing/add/howitworks", body);
};

export const getHowItWorks = () => {
  return axiosInstance.get(`/api/pricing/get-all/howitworks`);
};

export const updateHowItWorks = (_id, body) => {
  return axiosInstance.put(`/api/pricing/update/${_id}/howitworks`, body);
};

export const deleteHowItWorks = (_id) => {
  return axiosInstance.delete(`/api/pricing/delete/${_id}/howitworks`);
};
