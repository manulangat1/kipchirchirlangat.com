import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getPosts } from "../../redux/posts/slice";
import { List, ListItem } from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, posts } = useSelector((state: RootState) => state.posts);

  console.log(isLoading, posts);

  useEffect(() => {
    console.log("Hello world");
    dispatch(getPosts());
  }, []);
  return (
    <section
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <h3>Blog posts</h3>

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
              <Link to={`/posts/${post.id}`}>
                <p>{post.title} </p>
                <p>
                  Published at{" "}
                  {moment(post.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                </p>
              </Link>

              <hr></hr>
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
