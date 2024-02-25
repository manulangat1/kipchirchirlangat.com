import { Skeleton } from "@mui/material";
import React from "react";

function Loading() {
  return (
    <section
      style={{
        width: "80%",
        margin: "auto",
      }}
    >
      <Skeleton variant="text" width="80%" height={150} animation="wave" />
      <Skeleton variant="text" width="80%" height={150} animation="wave" />
      <Skeleton variant="text" width="80%" height={150} animation="wave" />
    </section>
  );
}

export default Loading;
