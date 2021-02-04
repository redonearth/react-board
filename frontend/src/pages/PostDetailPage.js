import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { POST_SERVER } from "../Config";
import parse from "html-react-parser";

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

function PostDetailPage({ match }) {
  const [postDetail, setPostDetail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { postId } = match.params;

  useEffect(() => {
    const fetchPostDetail = async () => {
      try {
        setError(null);
        setPostDetail(null);
        setLoading(true);

        const response = await axios.get(`${POST_SERVER}/detail`, {
          params: { postId }
        });
        setPostDetail(response.data.post);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchPostDetail();
  }, [postId]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러가 발생했습니다!</div>;
  if (!postDetail) return null;

  const { title, writer, content } = postDetail;

  return (
    <Container>
      <Title>{parse(title)}</Title>
      <Writer>{parse(writer.name)}</Writer>
      <Content>{parse(content)}</Content>
    </Container>
  );
}

export default withRouter(PostDetailPage);
