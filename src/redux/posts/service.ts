import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const getPosts = async () => {
  const response = await axios.get(BASE_URL + "/blog/v1/posts/un/");

  return response.data;
};

const getPostsById = async (id: string) => {
  const response = await axios.get(BASE_URL + "/blog/v1/posts/un/" + `${id}/`);
  return response.data;
};
export const postAPIService = {
  getPosts,
  getPostsById,
};
