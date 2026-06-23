import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getPosts } from "../../redux/posts/slice";
import { List, ListItem, Skeleton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import Loading from "../Reusable/Loading";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, posts } = useSelector((state: RootState) => state.posts);

  console.log(isLoading, posts);

  useEffect(() => {
    console.log("Hello world");
    dispatch(getPosts());
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <h3>Blog posts</h3>

      {isLoading ? <Loading /> : ""}

      {posts ? (
        <List>
          {posts?.map((post: any) => (
            <ListItem
              key={post.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <div className="postList">
                <Link className="postLink" to={`/posts/${post.id}`}>
                  <Typography variant="h5">{post.title}</Typography>
                </Link>
                <p>
                  {/* Published at{" "} */}
                  {moment(post.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </div>
              {/* <hr></hr> */}
            </ListItem>
          ))}
        </List>
      ) : (
        "No posts today"
      )}
    </section>
  );
};

export default Posts;
