import { Box } from "@mui/material";
import { FC } from "react";


import Feed from "../components/HomPage";

import BaseLayout from "../components/layout";

interface FeedProps {}

const feed: FC<FeedProps> = () => {
  return (
    <>
      <BaseLayout>
        <Box>
          <Feed />
        </Box>
      </BaseLayout>
    </>
  );
};

export default feed;
