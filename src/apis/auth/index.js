import axiosInstance from "..";

export const loginAdmin = (body) => {
  return axiosInstance.post("/api/auth/login", body);
};


