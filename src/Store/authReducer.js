import {
  REGISTER_USER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAIL,
  UPLOAD_PHOTO_SUCCESS,
  FETCH_COURSES_REQUEST,
  FETCH_COURSES_SUCCESS,
  FETCH_COURSES_FAIL,
  FETCH_USER_COURSES_REQUEST,
  FETCH_USER_COURSES_SUCCESS,
  FETCH_USER_COURSES_FAIL,
  FETCH_COURSE_CONTENT_REQUEST,
  FETCH_COURSE_CONTENT_SUCCESS,
  FETCH_COURSE_CONTENT_FAIL,
  FETCH_LECTURE_REQUEST,
  FETCH_LECTURE_SUCCESS,
  FETCH_LECTURE_FAIL,
  FETCH_COURSE_RESOURCES_REQUEST,
  FETCH_COURSE_RESOURCES_SUCCESS,
  FETCH_COURSE_RESOURCES_FAIL,
  SUMMARIZE_LECTURE_REQUEST,
  SUMMARIZE_LECTURE_SUCCESS,
  SUMMARIZE_LECTURE_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  error: null,
  user: null,
  courses: [],
  courseContent: null,
  courseContentError: null,
  lectureData: null,
  lectureError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false };
    case REGISTER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case FETCH_CURRENT_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_CURRENT_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_CURRENT_USER_FAIL:
      return { ...state, loading: false, error: action.payload };
    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          photo: action.payload.photoUrl,
        },
      };
    case FETCH_COURSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        loading: false,
        courses: action.payload,
      };
    case FETCH_COURSES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FETCH_USER_COURSES_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_COURSES_SUCCESS:
      return { ...state, loading: false, userCourses: action.payload };
    case FETCH_USER_COURSES_FAIL:
      return { ...state, loading: false, error: action.payload };
    case FETCH_COURSE_CONTENT_REQUEST:
      return {
        ...state,
        loadingCourseContent: true,
      };
    case FETCH_COURSE_CONTENT_SUCCESS:
      return {
        ...state,
        loadingCourseContent: false,
        courseContent: action.payload,
      };
    case FETCH_COURSE_CONTENT_FAIL:
      return {
        ...state,
        loadingCourseContent: false,
        courseContentError: action.payload,
      };
    case FETCH_LECTURE_REQUEST:
      return {
        ...state,
        loadingLecture: true,
        lectureError: null,
      };
    case FETCH_LECTURE_SUCCESS:
      return {
        ...state,
        loadingLecture: false,
        lectureData: action.payload,
      };
    case FETCH_LECTURE_FAIL:
      return {
        ...state,
        loadingLecture: false,
        lectureError: action.payload,
      };
    case FETCH_COURSE_RESOURCES_REQUEST:
      return { ...state, loadingCourseResources: true };
    case FETCH_COURSE_RESOURCES_SUCCESS:
      return {
        ...state,
        loadingCourseResources: false,
        courseResources: action.payload,
      };
    case FETCH_COURSE_RESOURCES_FAIL:
      return { ...state, loadingCourseResources: false, error: action.payload };
    case SUMMARIZE_LECTURE_REQUEST:
      return {
        ...state,
        loadingSummarization: true,
      };
    case SUMMARIZE_LECTURE_SUCCESS:
      return {
        ...state,
        loadingSummarization: false,
        summary: action.payload,
        errorSummarization: null,
      };
    case SUMMARIZE_LECTURE_FAILURE:
      return {
        ...state,
        loadingSummarization: false,
        summary: "",
        errorSummarization: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
