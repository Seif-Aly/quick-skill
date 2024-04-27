// Registration actions
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// Login actions
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const REFRESH_TOKEN = "REFRESH_TOKEN";

// Password reset email action
export const REQUEST_PASSWORD_RESET_EMAIL = "REQUEST_PASSWORD_RESET_EMAIL";

// Current user action
export const FETCH_CURRENT_USER_REQUEST = "FETCH_CURRENT_USER_REQUEST";
export const FETCH_CURRENT_USER_SUCCESS = "FETCH_CURRENT_USER_SUCCESS";
export const FETCH_CURRENT_USER_FAIL = "FETCH_CURRENT_USER_FAIL";

export const UPDATE_FIRSTNAME_REQUEST = "UPDATE_FIRSTNAME_REQUEST";
export const UPDATE_FIRSTNAME_SUCCESS = "UPDATE_FIRSTNAME_SUCCESS";
export const UPDATE_FIRSTNAME_FAIL = "UPDATE_FIRSTNAME_FAIL";

export const UPDATE_LASTNAME_REQUEST = "UPDATE_LASTNAME_REQUEST";
export const UPDATE_LASTNAME_SUCCESS = "UPDATE_LASTNAME_SUCCESS";
export const UPDATE_LASTNAME_FAIL = "UPDATE_LASTNAME_FAIL";

export const UPDATE_USERNAME_REQUEST = "UPDATE_USERNAME_REQUEST";
export const UPDATE_USERNAME_SUCCESS = "UPDATE_USERNAME_SUCCESS";
export const UPDATE_USERNAME_FAIL = "UPDATE_USERNAME_FAIL";

export const UPDATE_DESCRPTION_REQUEST = "UPDATE_DESCRPTION_REQUEST";
export const UPDATE_DESCRPTION_SUCCESS = "UPDATE_DESCRPTION_SUCCESS";
export const UPDATE_DESCRPTION_FAIL = "UPDATE_DESCRPTION_FAIL";

export const UPLOAD_PHOTO_REQUEST = "UPLOAD_PHOTO_REQUEST";
export const UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS";
export const UPLOAD_PHOTO_FAIL = "UPLOAD_PHOTO_FAIL";

export const FETCH_COURSES_REQUEST = "FETCH_COURSES_REQUEST";
export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";
export const FETCH_COURSES_FAIL = "FETCH_COURSES_FAIL";

export const FETCH_USER_COURSES_REQUEST = "FETCH_USER_COURSES_REQUEST";
export const FETCH_USER_COURSES_SUCCESS = "FETCH_USER_COURSES_SUCCESS";
export const FETCH_USER_COURSES_FAIL = "FETCH_USER_COURSES_FAIL";

export const FETCH_COURSE_CONTENT_REQUEST = "FETCH_COURSE_CONTENT_REQUEST";
export const FETCH_COURSE_CONTENT_SUCCESS = "FETCH_COURSE_CONTENT_SUCCESS";
export const FETCH_COURSE_CONTENT_FAIL = "FETCH_COURSE_CONTENT_FAIL";

export const FETCH_LECTURE_REQUEST = "FETCH_LECTURE_REQUEST";
export const FETCH_LECTURE_SUCCESS = "FETCH_LECTURE_SUCCESS";
export const FETCH_LECTURE_FAIL = "FETCH_LECTURE_FAIL";

export const FETCH_COURSE_RESOURCES_REQUEST = "FETCH_COURSE_RESOURCES_REQUEST";
export const FETCH_COURSE_RESOURCES_SUCCESS = "FETCH_COURSE_RESOURCES_SUCCESS";
export const FETCH_COURSE_RESOURCES_FAIL = "FETCH_COURSE_RESOURCES_FAIL";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

export const SUMMARIZE_LECTURE_REQUEST = "SUMMARIZE_LECTURE_REQUEST";
export const SUMMARIZE_LECTURE_SUCCESS = "SUMMARIZE_LECTURE_SUCCESS";
export const SUMMARIZE_LECTURE_FAILURE = "SUMMARIZE_LECTURE_FAILURE";

export const JOIN_COURSE_REQUEST = "JOIN_COURSE_REQUEST";
export const JOIN_COURSE_SUCCESS = "JOIN_COURSE_SUCCESS";
export const JOIN_COURSE_FAILURE = "JOIN_COURSE_FAILURE";

export const QUIT_COURSE_REQUEST = "QUIT_COURSE_REQUEST";
export const QUIT_COURSE_SUCCESS = "QUIT_COURSE_SUCCESS";
export const QUIT_COURSE_FAILURE = "QUIT_COURSE_FAILURE";

export const SET_GOAL_REQUEST = "SET_GOAL_REQUEST";
export const SET_GOAL_SUCCESS = "SET_GOAL_SUCCESS";
export const SET_GOAL_FAIL = "SET_GOAL_FAIL";

export const SET_GOALDAYS_REQUEST = "SET_GOALDAYS_REQUEST";
export const SET_GOALDAYS_SUCCESS = "SET_GOALDAYS_SUCCESS";
export const SET_GOALDAYS_FAIL = "SET_GOALDAYS_FAIL";

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_USER });

  try {
    const response = await fetch("https://localhost:8081/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    // Check if the response is OK and there is no content.
    if (
      response.ok &&
      response.status === 200 &&
      response.headers.get("Content-Length") === "0"
    ) {
      dispatch({ type: REGISTER_SUCCESS });
      // Since there's no content, there's nothing to parse.
      return {
        success: true,
        message:
          "Registration successful. Please check your email to confirm your account.",
      };
    } else if (response.ok) {
      // When the response is OK and there's content.
      const data = await response.json();
      dispatch({ type: REGISTER_SUCCESS, payload: data });
      return {
        success: true,
        data,
        message: "Registration successful.",
      };
    } else {
      // If the server responds with an error status code.
      const errorData = await response.json();
      dispatch({ type: REGISTER_FAIL, payload: errorData });
      return {
        success: false,
        message: errorData.message || "Registration failed.",
      };
    }
  } catch (error) {
    // other error.
    dispatch({ type: REGISTER_FAIL, payload: error.toString() });
    return {
      success: false,
      message: error.toString(),
    };
  }
};

function getCookie(name) {
  let cookie = {};
  document.cookie.split(";").forEach(function (el) {
    let [key, value] = el.split("=");
    cookie[key.trim()] = value;
  });
  return cookie[name];
}

function saveTokens(accessToken, refreshToken) {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
}

export const loginUser = (userData) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await fetch("https://localhost:8081/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    if (response.ok) {
      const accessToken = getCookie("great-cookie");

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);

      const acc = localStorage.getItem("accessToken");
      const acc2 = localStorage.getItem("refreshToken");
      console.log(acc);
      console.log(acc2);

      dispatch({ type: LOGIN_SUCCESS });
      return {
        success: true,
        data,
        message: "Registration successful.",
      };
    } else {
      const errorData = await response.json();
      dispatch({ type: LOGIN_FAIL, payload: errorData.message });
      return {
        success: false,
        message: errorData.message || "Login failed.",
      };
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.toString() });
    return {
      success: false,
      message: error.toString(),
    };
  }
};

// Helper function to get current timestamp in seconds
const currentTimeInSeconds = () => Math.floor(Date.now() / 1000);

// Function to save token and expiry time
const saveTokenAndExpiry = (refreshToken, expiresIn) => {
  const expiresAt = currentTimeInSeconds() + expiresIn;
  localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("refreshTokenExpiry", expiresAt.toString());
};

const saveAcessTokenAndExpiry = (refreshToken, expiresIn) => {
  const expiresAt = currentTimeInSeconds() + expiresIn;
  localStorage.setItem("accessToken", refreshToken);
};

// Function to check if the refresh token is expired
const isRefreshTokenExpired = () => {
  const expiry = localStorage.getItem("refreshTokenExpiry");
  const expiresAt = expiry ? parseInt(expiry, 10) : 0;
  return currentTimeInSeconds() >= expiresAt;
};

// Call this function before an API call to check if you need to refresh the token
const checkTokenAndRefresh = async (dispatch) => {
  if (isRefreshTokenExpired()) {
    // Dispatch your refreshToken action here
    await dispatch(refreshToken());
  }
};

export const refreshToken = () => async (dispatch) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    console.error("No refresh token available for refresh.");
    dispatch({ type: LOGIN_FAIL, payload: "No refresh token available." });
    return;
  }

  if (!accessToken) {
    console.error("No access token available for refresh.");
    dispatch({ type: LOGIN_FAIL, payload: "No access token available." });
    return;
  }

  try {
    const response = await fetch("https://localhost:8081/api/auth/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ accessToken, refreshToken }),
    });
    console.log("refreshToken function called");

    if (response.ok) {
      const data = await response.json();
      const expiresIn = 10800000000;
      saveTokenAndExpiry(data.refreshToken, data.expiresIn);
      saveAcessTokenAndExpiry(data.accessToken);
      dispatch({ type: REFRESH_TOKEN, payload: data });
    } else {
      dispatch({ type: LOGIN_FAIL, payload: "Failed to refresh token." });
      // localStorage.clear();
    }
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.toString() });
    // localStorage.clear();
  }
};

export const requestPasswordResetEmail = (email) => async (dispatch) => {
  try {
    const url = new URL("https://localhost:8081/api/auth/forgot-password");
    url.searchParams.append("email", email);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "*/*",
      },
    });

    if (response.ok) {
      dispatch({ type: REQUEST_PASSWORD_RESET_EMAIL, payload: true });
      return "A link to reset your password has been sent to your email address.";
    } else {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Failed to send password reset email.");
    }
  } catch (error) {
    dispatch({ type: REQUEST_PASSWORD_RESET_EMAIL, payload: false });
    throw error;
  }
};

export const fetchCurrentUser = () => async (dispatch) => {
  dispatch({ type: FETCH_CURRENT_USER_REQUEST });

  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch("https://localhost:8081/api/user/current", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: FETCH_CURRENT_USER_SUCCESS, payload: data });
    } else {
      dispatch({
        type: FETCH_CURRENT_USER_FAIL,
        payload: "Failed to fetch user.",
      });
    }
  } catch (error) {
    dispatch({ type: FETCH_CURRENT_USER_FAIL, payload: error.toString() });
  }
};

// Update user first name action
export const updateFirstName = (newName) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_FIRSTNAME_REQUEST });

  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch(
      `https://localhost:8081/api/user/firstname?newName=${encodeURIComponent(
        newName
      )}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.ok) {
      dispatch({ type: UPDATE_FIRSTNAME_SUCCESS });
      dispatch(fetchCurrentUser());
    } else {
      const errorData = await response.json();
      dispatch({ type: UPDATE_FIRSTNAME_FAIL, payload: errorData.message });
    }
  } catch (error) {
    dispatch({ type: UPDATE_FIRSTNAME_FAIL, payload: error.toString() });
  }
};

// Update user lasr name action
export const updateLastName = (newLastName) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_LASTNAME_REQUEST });

  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch(
      `https://localhost:8081/api/user/lastname?newLastName=${encodeURIComponent(
        newLastName
      )}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.ok) {
      dispatch({ type: UPDATE_LASTNAME_SUCCESS });
      dispatch(fetchCurrentUser());
    } else {
      const errorData = await response.json();
      dispatch({ type: UPDATE_LASTNAME_FAIL, payload: errorData.message });
    }
  } catch (error) {
    dispatch({ type: UPDATE_LASTNAME_FAIL, payload: error.toString() });
  }
};

// Update user  username action
export const updateUserName = (newUsername) => async (dispatch, getState) => {
  dispatch({ type: UPDATE_USERNAME_REQUEST });

  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch(
      `https://localhost:8081/api/user/username?newUsername=${encodeURIComponent(
        newUsername
      )}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.ok) {
      dispatch({ type: UPDATE_USERNAME_SUCCESS });
      dispatch(fetchCurrentUser());
    } else {
      const errorData = await response.json();
      dispatch({ type: UPDATE_USERNAME_FAIL, payload: errorData.message });
    }
  } catch (error) {
    dispatch({ type: UPDATE_USERNAME_FAIL, payload: error.toString() });
  }
};

// Update user description action
export const updateDescription =
  (description) => async (dispatch, getState) => {
    dispatch({ type: UPDATE_DESCRPTION_REQUEST });

    const accessToken = localStorage.getItem("accessToken");

    try {
      const response = await fetch(
        `https://localhost:8081/api/user/description?newDescription=${encodeURIComponent(
          description
        )}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.ok) {
        dispatch({ type: UPDATE_DESCRPTION_SUCCESS });
        dispatch(fetchCurrentUser());
      } else {
        const errorData = await response.json();
        dispatch({ type: UPDATE_DESCRPTION_FAIL, payload: errorData.message });
      }
    } catch (error) {
      dispatch({ type: UPDATE_DESCRPTION_FAIL, payload: error.toString() });
    }
  };

// Action for uploading photo
export const uploadPhoto = (file) => async (dispatch) => {
  dispatch({ type: UPLOAD_PHOTO_REQUEST });
  const accessToken = localStorage.getItem("accessToken");

  const formData = new FormData();
  formData.append("file", file, file.name);

  try {
    const response = await fetch("https://localhost:8081/api/user/photo", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      dispatch({ type: UPLOAD_PHOTO_SUCCESS, payload: data.photoUrl });

      localStorage.setItem("userPhotoUrl", data.photoUrl);
      return data.photoUrl;
    } else {
      const errorData = await response.text();
      dispatch({ type: UPLOAD_PHOTO_FAIL, payload: errorData });
      return new Error("Failed to upload photo.");
    }
  } catch (error) {
    dispatch({ type: UPLOAD_PHOTO_FAIL, payload: error.message });
    return error;
  }
};

export const fetchCourses = (filters) => async (dispatch) => {
  dispatch({ type: FETCH_COURSES_REQUEST });
  try {
    const queryParams = new URLSearchParams();
    for (const key in filters) {
      if (filters[key]) {
        queryParams.append(key, filters[key]);
      }
    }

    const response = await fetch(
      `http://localhost:8080/api/v1/courses/search/?${queryParams}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const data = await response.json();
    dispatch({ type: FETCH_COURSES_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: FETCH_COURSES_FAIL, payload: error.message });
  }
};

export const fetchMyCourses = (userId) => async (dispatch, getState) => {
  const state = getState();

  if (state.auth.loading || state.auth.userCourses) {
    return;
  }
  dispatch({ type: FETCH_USER_COURSES_REQUEST });
  try {
    const response = await fetch(`http://localhost:8080/api/v1/my-courses/`, {
      method: "GET",
      headers: {
        "X-Claim-userId": "1",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch courses");
    }
    const data = await response.json();
    dispatch({ type: FETCH_USER_COURSES_SUCCESS, payload: data.results });
  } catch (error) {
    dispatch({ type: FETCH_USER_COURSES_FAIL, payload: error.message });
  }
};

export const fetchCourseContent = (courseId) => async (dispatch) => {
  dispatch({ type: FETCH_COURSE_CONTENT_REQUEST });
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/courses/${courseId}`,
      {
        method: "GET",
        headers: {
          "X-Claim-userId": "1",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch course content");
    }
    const data = await response.json();
    dispatch({ type: FETCH_COURSE_CONTENT_SUCCESS, payload: data });
  } catch (error) {
    console.error("Fetching course content failed:", error);
    dispatch({ type: FETCH_COURSE_CONTENT_FAIL, payload: error.message });
    throw error;
  }
};

export const fetchLectureById = (lectureId) => async (dispatch) => {
  dispatch({ type: FETCH_LECTURE_REQUEST });
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/lectures/${lectureId}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch lecture data");
    }
    const data = await response.json();
    dispatch({ type: FETCH_LECTURE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_LECTURE_FAIL, payload: error.message });
  }
};

export const fetchCourseResources = (courseId) => async (dispatch) => {
  dispatch({ type: FETCH_COURSE_RESOURCES_REQUEST });
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/courses/${courseId}/details/`,
      {
        method: "GET",
        headers: {
          "X-Claim-userId": "1",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch course resources");
    }
    const data = await response.json();
    dispatch({
      type: FETCH_COURSE_RESOURCES_SUCCESS,
      payload: data.user_resources,
    });
  } catch (error) {
    dispatch({ type: FETCH_COURSE_RESOURCES_FAIL, payload: error.message });
  }
};

export const logoutUser = () => async (dispatch) => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  dispatch({ type: "LOGOUT" });
};

export const deleteUser = (password) => async (dispatch, getState) => {
  dispatch({ type: DELETE_USER_REQUEST });

  const accessToken = localStorage.getItem("accessToken");

  try {
    const response = await fetch("https://localhost:8081/api/user", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.ok) {
      dispatch({ type: DELETE_USER_SUCCESS });
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error deleting user");
    }
  } catch (error) {
    dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
  }
};

export const summarizeLecture = (lectureId) => async (dispatch) => {
  dispatch({ type: SUMMARIZE_LECTURE_REQUEST });
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/lectures/${lectureId}/summarize/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Claim-userId": "1",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to summarize the lecture");
    }

    const data = await response.json();
    dispatch({
      type: SUMMARIZE_LECTURE_SUCCESS,
      payload: data.summary,
    });
  } catch (error) {
    dispatch({
      type: SUMMARIZE_LECTURE_FAILURE,
      payload: error.message,
    });
  }
};

export const joinCourse = (courseId) => async (dispatch) => {
  dispatch({ type: JOIN_COURSE_REQUEST });
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/courses/join/${courseId}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Claim-userId": "1",
        },
      }
    );

    if (response.ok) {
      dispatch({ type: JOIN_COURSE_SUCCESS });
    } else {
      throw new Error("Failed to join the course");
    }
  } catch (error) {
    dispatch({ type: JOIN_COURSE_FAILURE, payload: error.message });
  }
};

// Quit a Course
export const quitCourse = (courseId) => async (dispatch) => {
  dispatch({ type: QUIT_COURSE_REQUEST });
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/courses/${courseId}/quit/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Claim-userId": "1",
        },
      }
    );

    if (response.ok) {
      dispatch({ type: QUIT_COURSE_SUCCESS });
    } else {
      throw new Error("Failed to quit the course");
    }
  } catch (error) {
    dispatch({ type: QUIT_COURSE_FAILURE, payload: error.message });
  }
};

export const setNewGoal = (newGoal) => async (dispatch) => {
  dispatch({ type: SET_GOAL_REQUEST });
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://localhost:8081/api/user/goalText?newGoal=${encodeURIComponent(
        newGoal
      )}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to set new goal");
    }

    dispatch({ type: SET_GOAL_SUCCESS });
  } catch (error) {
    dispatch({ type: SET_GOAL_FAIL, payload: error.message });
  }
};

export const setGoalDays = (daysCount) => async (dispatch) => {
  dispatch({ type: SET_GOALDAYS_REQUEST });
  const accessToken = localStorage.getItem("accessToken");
  try {
    const response = await fetch(
      `https://localhost:8081/api/user/goaldays?daysCount=${encodeURIComponent(
        daysCount
      )}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to set new goal");
    }

    dispatch({ type: SET_GOALDAYS_SUCCESS });
  } catch (error) {
    dispatch({ type: SET_GOALDAYS_FAIL, payload: error.message });
  }
};
