import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { setProduct } from "../store/product/product.reducer";
import ProductsJson from "../utils/products.json";
// I know we can do this more simple ,but basically we have apis in the project ,so using hook fir every requst is better options
const useRequestProduct = () => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const sendRequest = useCallback(() => {
    setLoading(false);
    setError(null);
    dispatch(setProduct(ProductsJson));
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

export default useRequestProduct;
