import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { POST_SERVER } from "../../../Config";

const PostLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const PostTitle = styled.h2`
  font-size: 2rem;
`;

function BoardWritePage() {
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const onContentsChange = (e) => {
    setContent(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const params = {
      writer: user.userData._id,
      title: Title,
      content: Content
    };

    axios.post(`${POST_SERVER}/write`, params).then((response) => {
      if (response.data.success) {
        alert("포스팅을 성공했습니다!");
        history.push("/");
      } else {
        alert("포스팅 에러가 발생했습니다.");
      }
    });
  };

  return (
    <PostLayout>
      <PostTitle>포스팅하기</PostTitle>
      <form onSubmit={onSubmit}>
        <label>Title</label>
        <input value={Title} onChange={onTitleChange} />
        <label>Contents</label>
        <textarea value={Content} onChange={onContentsChange} />
      </form>
      <button type="submit" onClick={onSubmit}>
        글 올리기
      </button>
    </PostLayout>
  );
}

export default BoardWritePage;
