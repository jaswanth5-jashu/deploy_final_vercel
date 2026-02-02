import { apiRequest } from "./api";

export const submitHackathonForm = async (payload) => {
  const res = await api.post("/hackathon/", payload);
  return res.data;
};
