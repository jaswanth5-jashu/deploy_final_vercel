import axios from "axios";

export const submitHackathonForm = async (payload) => {
  try {
    await axios.post(
      "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return true;
  } catch (err) {
    console.error("API Error:", err);
    return false;
  }
};
