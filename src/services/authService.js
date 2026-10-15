import { parseToken, registerToken } from "../lib/helpers/jwt-helpers";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api`;

const signUp = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        typeof data.detail === "string"
          ? data.detail
          : `Registration failed: ${res.status}`
      );
    }

    if (data.token) {
      registerToken(data.token);
      return parseToken(data.token);
    }

    throw new Error("Invalid response from server");
  } catch (err) {
    console.error("Sign up error:", err);
    throw err;
  }
};

const signIn = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(
        typeof data.detail === "string"
          ? data.detail
          : `Login failed: ${res.status}`
      );
    }

    if (data.token) {
      registerToken(data.token);
      return parseToken(data.token);
    }

    throw new Error("Invalid response from server");
  } catch (err) {
    console.error("Sign in error:", err);
    throw err;
  }
};

export { signUp, signIn };