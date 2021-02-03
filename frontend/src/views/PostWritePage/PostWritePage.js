import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PostWriteActionButtons from "./PostWriteActionButtons";
import styled from "styled-components";
import axios from "axios";
import { POST_SERVER } from "../../Config";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;

const PostTitle = styled.h2`
  font-size: 2rem;
`;

function BoardWritePage() {
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onPublish = (e) => {
    e.preventDefault();

    const params = {
      writer: user.userData._id,
      title,
      content
    };

    if (title.length < 2 || content.length === 0) {
      if (title.length < 2) {
        alert("제목을 최소 2글자 이상 입력해주세요.");
        return;
      } else if (content.length === 0) {
        alert("내용을 입력해주세요.");
        return;
      }
    }

    const publishPost = async () => {
      try {
        const response = await axios.post(`${POST_SERVER}/write`, params);
        if (response.data.success) {
          alert("포스팅을 성공했습니다!");
          history.push("/");
        }
      } catch (e) {
        alert("포스팅 에러가 발생했습니다.");
      }
    };
    publishPost();
  };

  const onCancel = () => {
    history.goBack();
  };

  return (
    <PostLayout>
      <PostTitle>포스팅하기</PostTitle>
      <form onSubmit={onPublish}>
        <label>글 제목</label>
        <input
          value={title}
          onChange={onTitleChange}
          placeholder="제목을 입력하세요."
        />
        <ReactQuill
          theme={"snow"}
          value={content}
          onChange={setContent}
          placeholder="포스팅을 작성하세요."
        />
      </form>
      <PostWriteActionButtons onPublish={onPublish} onCancel={onCancel} />
    </PostLayout>
  );
}

export default BoardWritePage;
