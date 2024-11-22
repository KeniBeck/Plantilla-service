import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post("/login", {
      email,
      password,
    });

    return response.data;
  } catch (error : any) {
    return error.response.data;
  }
};