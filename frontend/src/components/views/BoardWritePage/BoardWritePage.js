import React, { useState } from "react";
import styled from "styled-components";

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const PageTitle = styled.h2`
  font-size: 2rem;
`;

function BoardWritePage() {
  const [Title, setTitle] = useState("");
  const [Contents, setContents] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const onContentsChange = (e) => {
    setContents(e.currentTarget.value);
  };

  return (
    <PageLayout>
      <PageTitle>Write your article!</PageTitle>
      <form>
        <label>Title</label>
        <input value={Title} onChange={onTitleChange} />
        <label>Contents</label>
        <textarea value={Contents} onChange={onContentsChange} />
      </form>
    </PageLayout>
  );
}

export default BoardWritePage;
