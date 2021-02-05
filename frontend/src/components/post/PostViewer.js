import React from "react";
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { Link, withRouter } from "react-router-dom";
import Responsive from "../common/Responsive";

const PostViewerWrapper = styled(Responsive)`
  margin-top: 4rem;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
`;

const Writer = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
`;

const Content = styled.div``;

const Post = ({ id, writer, title, content }) => (
  <Link to={`/posts/${id}`}>
    <Title>{title}</Title>
    <Writer>{writer}</Writer>
    <Content>{content}</Content>
  </Link>
);

export default withRouter(Post);
