import axiosInstance from "..";

export const addCategory = (body) => {
  return axiosInstance.post("/api/categories/add", body);
};

export const getAllCategories = () => {
  return axiosInstance.get("/api/categories/get-all");
};

export const getCategoryById = (_id) => {
  return axiosInstance.get(`/api/categories/get?_id=${_id}`);
};

export const deleteCategory = (_id) => {
  return axiosInstance.delete(`/api/categories/delete/${_id}`);
};

export const updateCategory = (_id, body) => {
  return axiosInstance.put(`/api/categories/update/${_id}`, body);
};
