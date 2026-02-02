import api from "./api";

export const submitHackathonForm = async (payload) => {
  try {
    const res = await api.post("/hackathon/", payload);
    return res.status === 201 || res.status === 200;
  } catch (error) {
    console.error("Hackathon API error:", error.response?.data || error.message);
    return false;
  }
};
