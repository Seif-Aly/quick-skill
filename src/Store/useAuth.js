import { useSelector } from "react-redux";

const useAuth = () => {
  const { accessToken } = useSelector((state) => state.auth);
  const isLoggedIn = Boolean(
    accessToken || localStorage.getItem("accessToken")
  );

  return isLoggedIn;
};

export default useAuth;
