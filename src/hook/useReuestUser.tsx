import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/user/user.reducer";

//we didn't login ,so we fill with fake data for user
const useRequestUser = () => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const sendRequest = useCallback(() => {
    setLoading(false);
    setError(null);
    dispatch(
      setUser({
        name: "Soodabeh taherpanah",
        email: "sudytaher@gmil.com",
        adress: "",
      })
    );
  }, []);
  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  return {
    loading,
    error,
    sendRequest,
  };
};

export default useRequestUser;
