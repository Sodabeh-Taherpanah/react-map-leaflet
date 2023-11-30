import { useState, useCallback, useEffect } from "react";
import { setProduct } from "../store/product/product.reducer";
import { useDispatch } from "react-redux";
import ProductsJson from "../utils/products.json";
const useRequestProduct = () => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  const sendRequest = useCallback(() => {
    setLoading(false);
    setError(null);
    dispatch(setProduct(ProductsJson));
    // import("../utils/products.json")
    //   .then((ProductsJson) => {
    //     let arr: any = [];
    //     Object.values(ProductsJson).forEach((item) => {
    //       arr.push(item);
    //     });
    //     console.log("ProductsJson", arr[0]);
    //     dispatch(setProduct(arr));
    //   })
    //   .catch(() => {
    //     setError(error);
    //     setLoading(false);
    //   });
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
