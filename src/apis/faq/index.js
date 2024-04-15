import axiosInstance from "..";

export const addFaq = (body) => {
  return axiosInstance.post("/api/faq/add", body);
};

export const getFaqs = () => {
  return axiosInstance.get(`/api/faq/get-all`);
};

export const updateFaq = (_id, body) => {
  return axiosInstance.put(`/api/faq/update/${_id}`, body);
};

export const deleteFaq = (_id) => {
  return axiosInstance.delete(`/api/faq/delete/${_id}`);
};
