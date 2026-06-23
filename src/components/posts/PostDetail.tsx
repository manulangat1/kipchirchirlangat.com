import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPostsByIdSlice } from "../../redux/posts/slice";
import { AppDispatch, RootState } from "../../store";
import { Skeleton } from "@mui/material";
import Loading from "../Reusable/Loading";

import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";
import gfm from "remark-gfm";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

interface Param {
  id?: string | undefined;
}
const PostDetail = () => {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, post } = useSelector((state: RootState) => state.posts);

  console.log(params, params.id);
  useEffect(() => {
    if (params.id) {
      dispatch(getPostsByIdSlice(params.id));
    }
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="basicContainer">
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
      )}
    </main>
  );
};

export default PostDetail;
