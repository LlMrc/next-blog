'use client'

import { Divider, Typography } from "@mui/material";
import React from "react";
type Props = {
  promise: Promise<Post[]>;
};

const UserPost = async ({ promise }: Props) => {
  const post = await promise;
  const content = post.map((item) => {
    return (
      <article key={item.id}>
        <Typography>{item.title}</Typography>
        <Divider />
        <Typography variant="h6">{item.body}</Typography>
      </article>
    );
  });
  return content;
};
export default UserPost;
