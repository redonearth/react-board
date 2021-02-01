import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

function PostDetailPage(props, { id, writer, title, content }) {
  const [PostDetail, setPostDetail] = useState([]);
  const {
    match: {
      params: { postId }
    }
  } = props;

  useEffect(() => {
    axios.post("/api/posts/detail", postId).then((response) => {
      if (response.data.success) {
        console.log(response.data);
        setPostDetail(response.data.post);
      } else {
        alert("포스트를 불러오는 중 에러가 발생했습니다.");
      }
    });
  }, []);

  return <>{writer ? <div>{writer.name}</div> : <div></div>}</>;
}

export default withRouter(PostDetailPage);
