import axios from "axios";

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getMenu() {
  try {
    const res = await axios.get(`${API_URL}/menu`);
    console.log(res.data.data);
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
  try {
    const res = await axios.get(`${API_URL}/order/${id}`);
    return res.data.data;
  } catch (error) {
    throw new Error(`Couldn't find order #${id}`, error.message);
  }
}

export async function createOrder(newOrder) {
  try {
    const res = await axios.post(`${API_URL}/order`, newOrder, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Failed creating your order", error.message);
  }
}
