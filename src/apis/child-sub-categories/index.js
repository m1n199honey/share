import axiosInstance from "..";

export const getAllChildSubCategories = () => {
  return axiosInstance.get("/api/child-sub-categories/get-all");
};

export const addChildSubCategory = (body) => {
  return axiosInstance.post("/api/child-sub-categories/add", body);
};

export const deleteChildSubCategory = (_id) => {
  return axiosInstance.delete(`/api/child-sub-categories/delete/${_id}`);
};

export const updateChildSubCategory = (_id, body) => {
  return axiosInstance.put(`/api/child-sub-categories/update/${_id}`, body);
};
