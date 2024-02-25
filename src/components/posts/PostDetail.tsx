import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getPostsByIdSlice } from "../../redux/posts/slice";
import { AppDispatch } from "../../store";
interface Param {
  id: string;
}
const PostDetail = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();

  console.log(params, params.id);
  useEffect(() => {
    if (params.id) {
      dispatch(getPostsByIdSlice(params.id));
    }
  }, []);
  return <div>PostDetail</div>;
};

export default PostDetail;
