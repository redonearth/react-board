import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
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
    <Container>
      <Title>{title}</Title>
      <Writer>{writer}</Writer>
      <Content>{content}</Content>
    </Container>
  </Link>
);

export default Post;
