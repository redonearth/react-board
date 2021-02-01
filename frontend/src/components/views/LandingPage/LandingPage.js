import axios from "axios";
import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Post from "../../Post";

const SLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

function LandingPage() {
  useEffect(() => {
    axios.get("/api/posts/list").then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setPostCard(response.data.posts);
      } else {
        alert("포스팅을 가져오는 중 에러가 발생했습니다.");
      }
    });
  }, []);

  const [PostCard, setPostCard] = useState([]);

  return (
    <SLayout>
      {PostCard.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          writer={post.writer.name}
          title={post.title}
          content={post.content}
        />
      ))}
    </SLayout>
  );
}

export default withRouter(LandingPage);
