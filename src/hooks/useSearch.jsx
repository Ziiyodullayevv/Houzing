// import { useLocation } from "react-router-dom";

export const useSearch = () => {
  const { search } = window.location;
  return new URLSearchParams(search);
};

export default useSearch;
