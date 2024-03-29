export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const registerUser = (userData) => async (dispatch) => {
  console.log("Attempting to register user with data:", userData);

  try {
    const response = await fetch("https://localhost:8081/api/auth/register", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    console.log("Response received:", response);

    if (!response.ok) {
      const errorResponse = await response.json();
      console.error("Error response:", errorResponse);
      throw new Error(errorResponse.message || "Registration failed.");
    }

    const data = await response.json();
    console.log("Registration successful:", data);

    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    console.error("Registration error:", error);
    dispatch({ type: REGISTER_FAIL, payload: error.message });
  }
};
