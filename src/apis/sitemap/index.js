import axiosInstance from "..";

export const addSitemap = (body) => {
  return axiosInstance.post("/api/legal/add/sitemap", body);
};

export const getSitemaps = () => {
  return axiosInstance.get(`/api/legal/get-all/sitemap`);
};

export const deleteSitemap = (_id) => {
  return axiosInstance.delete(`/api/legal/delete/${_id}/sitemap`);
};

export const updateSitemap = (_id, body) => {
  return axiosInstance.put(`/api/legal/update/${_id}/sitemap`, body);
};
