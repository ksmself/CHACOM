/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import CommentListItem from './CommentListItem';

const commentBox = css`
  margin-bottom: 32px;
  padding: 13px 5px 6px;
  border: 1px solid #755eff;
  border-radius: 10px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    padding: 15px 10px 5px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 48px;
    padding: 20px 15px 13px;
  }

  textarea {
    &:hover {
      border-color: #18ddff;
    }
  }
`;

const CommentList = ({ comments }) => {
  return (
    <ul css={commentBox}>
      {comments.map((comment, index, commentList) => {
        const onlyCommentList = commentList.filter((v) => v.ReplyId === null);

        if (comment.ReplyId === null) {
          return (
            <CommentListItem
              key={comment.id}
              comment={comment}
              index={index}
              commentList={commentList}
              onlyCommentLength={onlyCommentList.length}
            />
          );
        }
      })}
    </ul>
  );
};

export default CommentList;
