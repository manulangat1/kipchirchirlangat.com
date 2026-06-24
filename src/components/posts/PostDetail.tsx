import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getPostsByIdSlice } from "../../redux/posts/slice";
import { AppDispatch, RootState } from "../../store";
import { Box, Button, Container, Skeleton, Stack, Typography } from "@mui/material";

import ReactMarkdown from "react-markdown";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "../../App.css";

const BlogDetailLoader = () => (
  <Box component="main" className="blog-detail-page" aria-label="Loading post">
    <Container maxWidth={false} className="site-container">
      <Stack className="blog-detail-loader">
        <Skeleton className="blog-skeleton" variant="text" width="72%" height={64} />
        <Skeleton className="blog-skeleton" variant="text" width={180} height={28} />
        <Skeleton className="blog-skeleton" variant="rectangular" height={220} />
        <Skeleton className="blog-skeleton" variant="text" width="96%" height={28} />
        <Skeleton className="blog-skeleton" variant="text" width="88%" height={28} />
        <Skeleton className="blog-skeleton" variant="text" width="92%" height={28} />
        <Skeleton className="blog-skeleton" variant="rectangular" height={160} />
      </Stack>
    </Container>
  </Box>
);

const PostDetail = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { error, isLoading, post } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    if (params.id) {
      dispatch(getPostsByIdSlice(params.id));
    }
  }, [dispatch, params.id]);

  if (isLoading) {
    return <BlogDetailLoader />;
  }

  const handleRetry = () => {
    if (params.id) {
      dispatch(getPostsByIdSlice(params.id));
    }
  };

  if (error || !post?.content) {
    return (
      <Box component="main" className="blog-detail-page">
        <Container maxWidth={false} className="site-container">
          <Box className="blog-error-state" role="alert">
            <Typography component="h1" className="blog-error-title">
              Could not load this post
            </Typography>
            <Typography component="p" className="blog-error-message">
              {error || "This post is unavailable or may have been removed."}
            </Typography>
            <Stack className="blog-error-actions" direction="row">
              {params.id ? (
                <Button
                  variant="outlined"
                  className="blog-error-action"
                  onClick={handleRetry}
                >
                  Try again
                </Button>
              ) : null}
              <Button
                component={Link}
                to="/blog"
                variant="contained"
                className="blog-error-primary-action"
              >
                Back to blog
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box component="main" className="blog-detail-page">
      <Container maxWidth={false} className="site-container">
        <section className="blog-detail-content">
          <ReactMarkdown
            children={post?.content}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },

              img({ node, ...props }) {
                return (
                  <img
                    {...props}
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                    alt={props.alt}
                  />
                );
              },
            }}
          />

          {/* <ReactMarkdown
            children={post?.content}
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    children={String(children).replace(/\n$/, "")}
                    style={materialDark}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          /> */}
        </section>
      </Container>
    </Box>
  );
};

export default PostDetail;
