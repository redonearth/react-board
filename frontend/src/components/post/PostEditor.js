import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PostWriteActionButtons from "./PostWriteActionButtons";
import styled from "styled-components";
import axios from "axios";
import Responsive from "../common/Responsive";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostEditorWrapper = styled(Responsive)`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  padding: 50px;
`;

const PostTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  height: 3rem;
  font-size: 1.25rem;
`;

const StyledReactQuill = styled(ReactQuill)`
  .ql-editor {
    min-height: 240px;
    font-size: 1.25rem;
  }
`;

const PostWriteActionButtonsWrapper = styled.div`
  display: flex;
  align-self: flex-end;
`;

const PostEditor = () => {
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };

  const onPublish = (e) => {
    e.preventDefault();

    if (title.length < 2 || content.length === 0) {
      if (title.length < 2) {
        alert("제목을 최소 2글자 이상 입력해주세요.");
        return;
      } else if (content.length === 0) {
        alert("내용을 입력해주세요.");
        return;
      }
    }

    // const params = {
    //   writer: user.userData._id,
    //   title,
    //   content
    // };

    // const publishPost = async () => {
    //   try {
    //     const response = await axios.post(`${POST_SERVER}/write`, params);
    //     if (response.data.success) {
    //       alert("포스팅을 성공했습니다!");
    //       history.push("/");
    //     }
    //   } catch (e) {
    //     alert("포스팅 에러가 발생했습니다.");
    //   }
    // };
    // publishPost();
  };

  const onCancel = () => {
    history.goBack();
  };

  return (
    <PostEditorWrapper>
      <PostTitle>포스팅하기</PostTitle>
      <form onSubmit={onPublish}>
        <StyledInput
          placeholder="제목을 입력하세요."
          value={title}
          onChange={onTitleChange}
        />
        <StyledReactQuill
          theme="snow"
          placeholder="내용을 입력하세요."
          value={content}
          onChange={setContent}
        />
      </form>
      <PostWriteActionButtonsWrapper>
        <PostWriteActionButtons onPublish={onPublish} onCancel={onCancel} />
      </PostWriteActionButtonsWrapper>
    </PostEditorWrapper>
  );
};

export default PostEditor;
