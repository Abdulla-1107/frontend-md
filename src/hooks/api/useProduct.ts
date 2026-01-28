import { useQuery } from "@tanstack/react-query";
import api from "./api";

export const useProduct = () => {
  const getProduct = (props: any) =>
    useQuery({
      queryKey: ["product", props],
      queryFn: () =>
        api.get("/product", { params: props }).then((res) => res),
    });

  const getOneProduct = (id: string) => {
    return useQuery({
      queryKey: ["product", id],
      queryFn: () => api.get(`/product/${id}`).then((res) => res.data),
    });
  };

  return { getProduct, getOneProduct };
};
