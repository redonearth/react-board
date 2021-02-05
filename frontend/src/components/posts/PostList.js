import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import palette from "../../lib/styles/palette";
import { Link, withRouter } from "react-router-dom";
import Responsive from "../common/Responsive";

const PostListWrapper = styled(Responsive)`
  margin-top: 3rem;
`;

const PostItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 9px;
  padding: 2rem 2.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    background: ${palette.gray[1]};
    cursor: pointer;
  }
  & + & {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .left {
    font-size: 1.5rem;
    font-weight: 700;
    color: ${palette.indigo[9]};
  }
  .right {
    font-size: 1.025rem;
    font-weight: 500;
    color: ${palette.gray[7]};
    span:last-child {
      margin-left: 1.5rem;
    }
  }
`;

const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2.5rem;
`;

const PostItem = ({ post }) => {
  // const { publishedDate, title, user, _id } = post;
  return (
    <PostItemWrapper>
      <div className="left">
        <Link to="/">제목</Link>
        {/* <Link to={`/@${user.username}/${_id}`}>{title}</Link> */}
      </div>
      <div className="right">
        <span>작성자</span>
        <span>{new Date().toLocaleString()}</span>
        {/* <span>{user.username}</span> */}
        {/* <span>{publishedDate}</span> */}
      </div>
    </PostItemWrapper>
  );
};

const PostList = () => {
  return (
    <PostListWrapper>
      <WritePostButtonWrapper>
        <Button to="/write">글쓰기</Button>
      </WritePostButtonWrapper>
      <div>
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </PostListWrapper>
  );
};

export default withRouter(PostList);
