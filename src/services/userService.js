import api from "../api";

//44366 https
//44599 http

export const login = async (userData) => {
  return await api.get(`/shkolla/api/Course/login/${userData.email}/${userData.password}`);
};
