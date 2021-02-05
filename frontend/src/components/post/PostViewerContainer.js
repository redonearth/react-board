import React from "react";
import { withRouter } from "react-router-dom";
import PostViewer from "./PostViewer";

const PostViewerContainer = () => {
  return <PostViewer />;
};

export default withRouter(PostViewerContainer);
