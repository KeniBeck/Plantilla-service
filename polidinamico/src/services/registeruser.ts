import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const resgisterUser = async(name: string,lastname: string, email: string, password: string) => {
  try {
    const response = await api.post("/user", {
      name,
      lastname,
      email,
      password,
    });

    return response.data;
  } catch (error : any) {
    return error.response.data;
  }
}