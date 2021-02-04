import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import { withRouter } from "react-router-dom";
import Post from "../components/Post";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

function LandingPage() {
  // const [posts, setPosts] = useState(null);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       setError(null);
  //       setPosts(null);
  //       setLoading(true);

  //       const response = await axios.get(`${POST_SERVER}/list`);
  //       setPosts(response.data.posts);
  //     } catch (e) {
  //       setError(e);
  //     }
  //     setLoading(false);
  //   };
  //   fetchPosts();
  // }, []);

  // if (loading) return <div>로딩 중...</div>;
  // if (error) return <div>에러가 발생했습니다!</div>;
  // if (!posts) return null;

  return (
    // <Container>
    <div>
      <Button>버튼</Button>
      {/* {posts.map((post) => (
        <Post
          key={post._id}
          id={post._id}
          writer={post.writer.name}
          title={post.title}
          content={post.content}
        />
      ))} */}
    </div>
    // </Container>
  );
}

export default LandingPage;
