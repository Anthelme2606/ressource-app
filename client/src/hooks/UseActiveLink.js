import { useLocation } from "react-router-dom";

const useActiveLink = (linkPath) => {
  const location = useLocation();

  const isActive = location.pathname === linkPath;

  return isActive;
};

export default useActiveLink;
