import axiosInstance from "..";

export const getAllSubCategories = () => {
  return axiosInstance.get("/api/sub-categories/get-all");
};

export const addSubCategory = (body) => {
  return axiosInstance.post("/api/sub-categories/add", body);
};

export const deleteSubCategory = (_id) => {
  return axiosInstance.delete(`/api/sub-categories/delete/${_id}`);
};

export const updateSubCategory = (_id, body) => {
  return axiosInstance.put(`/api/sub-categories/update/${_id}`, body);
};
