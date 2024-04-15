import axiosInstance from ".";

export const serverAlive = () => {
    return axiosInstance.get("/api/status");
};


