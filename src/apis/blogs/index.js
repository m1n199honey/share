import axiosInstance from "..";

export const addBlog = (body) => {
  return axiosInstance.post("/api/blog/add", body);
};

export const getBlogs = () => {
  return axiosInstance.get(`/api/blog/get-all`);
};

export const updateBlog = (_id, body) => {
  return axiosInstance.put(`/api/blog/update/${_id}`, body);
};

export const deleteBlog = (_id) => {
  return axiosInstance.delete(`/api/blog/delete/${_id}`);
};
