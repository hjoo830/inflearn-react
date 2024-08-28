import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "황효주",
    comment: "안녕",
  },
  {
    name: "신짱구",
    comment: "호호잇~!",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
