import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getPosts } from "../../redux/posts/slice";
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../App.css";

const BlogListLoader = () => (
  <Box component="main" className="blog-page" aria-label="Loading blog posts">
    <Container maxWidth={false} className="site-container">
      <Stack className="blog-header">
        <Skeleton className="blog-skeleton" variant="text" width={140} height={20} />
        <Skeleton className="blog-skeleton" variant="text" width="45%" height={58} />
        <Skeleton className="blog-skeleton" variant="text" width="65%" height={28} />
      </Stack>

      <Stack className="blog-loader-list">
        {[1, 2, 3, 4].map((item) => (
          <Box className="blog-loader-card" key={item}>
            <Skeleton
              className="blog-skeleton"
              variant="text"
              width="55%"
              height={34}
            />
            <Skeleton
              className="blog-skeleton"
              variant="text"
              width={150}
              height={24}
            />
          </Box>
        ))}
      </Stack>
    </Container>
  </Box>
);

const Posts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { error, isLoading, posts } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <BlogListLoader />;
  }

  const handleRetry = () => {
    dispatch(getPosts());
  };

  return (
    <Box component="main" className="blog-page">
      <Container maxWidth={false} className="site-container">
        <Stack className="blog-header">
          <Typography component="p" className="blog-eyebrow">
            Notes and projects
          </Typography>
          <Typography variant="h3" component="h1" className="blog-title">
            Blog posts
          </Typography>
          <Typography component="p" className="blog-description">
            Things I have learned, experiments I am working through, and notes
            from building software.
          </Typography>
        </Stack>

        {error ? (
          <Box className="blog-error-state" role="alert">
            <Typography component="h2" className="blog-error-title">
              Could not load blog posts
            </Typography>
            <Typography component="p" className="blog-error-message">
              {error}
            </Typography>
            <Button
              variant="outlined"
              className="blog-error-action"
              onClick={handleRetry}
            >
              Try again
            </Button>
          </Box>
        ) : posts && posts.length > 0 ? (
          <List className="blog-list">
            {posts.map((post: any) => (
              <ListItem key={post.id} className="blog-list-item" disablePadding>
                <Link className="postLink blog-post-link" to={`/posts/${post.id}`}>
                  <Stack className="blog-post-content">
                    <Typography
                      variant="h5"
                      component="h2"
                      className="blog-post-title"
                    >
                      {post.title}
                    </Typography>
                    <Typography component="time" className="blog-post-date">
                      {moment(post.created_at).format("MMMM Do YYYY")}
                    </Typography>
                  </Stack>
                </Link>
              </ListItem>
            ))}
          </List>
        ) : (
          <Box className="blog-empty-state">
            <Typography>No posts today.</Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Posts;
