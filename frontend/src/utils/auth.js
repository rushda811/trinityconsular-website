import axios from "axios";

const API_URL = "https://trinityconsular-website.onrender.com/api";

// Store token in localStorage
export function setTokens(access, refresh) {
  localStorage.setItem("access_token", access);
  localStorage.setItem("refresh_token", refresh);
}

// Get access token
export function getAccessToken() {
  return localStorage.getItem("access_token");
}

// Login and get JWT tokens
export async function login(username, password) {
  const response = await axios.post(`${API_URL}/token/`, { username, password });
  setTokens(response.data.access, response.data.refresh);
  return response.data.access;
}

// Refresh token if access token expired
export async function refreshToken() {
  const refresh = localStorage.getItem("refresh_token");
  const response = await axios.post(`${API_URL}/token/refresh/`, { refresh });
  setTokens(response.data.access, response.data.refresh);
  return response.data.access;
}

// Axios wrapper to automatically send Authorization header
export async function fetchProtected(endpoint) {
  let token = getAccessToken();

  try {
    const response = await axios.get(`${API_URL}${endpoint}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    // If 401, try refreshing token once
    if (error.response && error.response.status === 401) {
      token = await refreshToken();
      const response = await axios.get(`${API_URL}${endpoint}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } else {
      throw error;
    }
  }
}
