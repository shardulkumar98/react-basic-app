import { useMutation } from "react-query";
import axiosInstance from "services/axiosInstance";

const post = async ({ url, payload, token, headers }) => {
  const userToken = await localStorage.getItem("_token");
  const finalHeaders = token
    ? { ...headers, Authorization: `Bearer ${userToken}` }
    : { ...headers };
  const { data } = await axiosInstance.post(url, payload, {
    headers: finalHeaders,
  });
  return data;
};

const usePost = () => useMutation(post);

export default usePost;
