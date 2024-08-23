import axios from "axios";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  try {
    const res = await axios.get(`${API_URL}/menu`);
    return res.data.data;
  } catch (error) {
    throw new Error(
      `Failed getting menu: ${
        error.response ? error.response.data.message : error.message
      }`
    );
  }
}

export async function getOrder(id) {
  console.log("Answer is: ", id);
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const response = await axios.post(`${API_URL}/order`, newOrder, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = response.data.data;

    return data;
  } catch (error) {
    if (error.response) {
      console.error("API error details:", error.response.data);
      throw new Error(
        error.response.data.message || "Failed creating your order"
      );
    } else {
      console.error("Network or other error:", error.message);
      throw new Error(error.message);
    }
  }
}
