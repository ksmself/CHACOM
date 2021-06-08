/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const commentItem = css`
  padding: 13px 12px 5px;

  @media (min-width: 768px) {
    padding: 12px;
  }

  @media (min-width: 1024px) {
    padding: 12px 14px;
  }
`;

export const commentInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 5px;
  margin-bottom: 5px;
  font-size: 15px;

  @media (min-width: 768px) {
    padding-left: 5px;
    margin-bottom: 7px;
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    padding-left: 10px;
    font-size: 22px;
  }

  div {
    margin-bottom: 0;

    button {
      padding: 1px 3px;

      @media (min-width: 768px) {
        padding: 1px 6px;
      }
    }
  }
`;

export const commentInfoWriter = css`
  display: inline-block;
  margin-right: 3px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-right: 5px;
  }
`;

export const commentInfoWriterIsMe = css`
  display: block;
  margin-right: 3px;
  font-weight: 700;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 5px;
  }
`;

export const commentInfoBullet = css`
  margin-right: 3px;

  @media (min-width: 768px) {
    margin-right: 5px;
  }
`;

export const myCommentInfoBullet = css`
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    margin-right: 5px;
  }
`;

export const commentInfoDate = css`
  color: #646a70;
`;

export const commentContent = css`
  padding-left: 5px;
  margin-bottom: 8px;
  font-size: 17px;

  @media (min-width: 768px) {
    padding-left: 5px;
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    padding-left: 10px;
    font-size: 22px;
  }
`;

export const divideLine = css`
  width: 100%;
  height: 1px;
  margin-top: 10px;
  background-color: #d9d9d9;

  @media (min-width: 1024px) {
    margin-top: 25px;
  }
`;

export const replyPlusBtn = css`
  margin-bottom: 3px;

  @media (min-width: 768px) {
    margin-bottom: 7px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 13px;
  }

  button {
    padding: 4px 6px;
    font-weight: 700;
    border: none;
    color: #3a18ff;

    &:hover {
      color: #3a18ff;
      border: none;
      cursor: pointer;
    }

    &:focus {
      color: #3a18ff;
      border: none;
    }

    @media (min-width: 768px) {
      padding: 4px 10px;
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 19px;
    }
  }
`;

export const replyMinusBtn = css`
  margin-bottom: 3px;

  @media (min-width: 768px) {
    margin-bottom: 7px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 13px;
  }

  button {
    padding: 4px 6px;
    font-weight: 700;
    border: none;
    color: #00adcb;

    &:hover {
      color: #00adcb;
      border: none;
      cursor: pointer;
    }

    &:focus {
      color: #00adcb;
      border: none;
    }

    @media (min-width: 768px) {
      padding: 4px 10px;
      font-size: 16px;
    }

    @media (min-width: 1024px) {
      font-size: 19px;
    }
  }
`;

export const commentFormBox = css`
  padding: 5px 8px;

  @media (min-width: 1024px) {
    padding: 15px 12px;
  }

  textarea {
    border-color: #18ddff;

    &:focus {
      border-color: #18ddff;
    }
  }
`;

export const replyCommentBox = css`
  padding: 6px 7px 8px;
  margin-left: 20px;
  background-color: #f4f4f4;

  @media (min-width: 768px) {
    padding: 10px 9px 12px;
    margin-left: 22px;
  }

  @media (min-width: 1024px) {
    padding: 9px 11px 16px;
    margin-left: 27px;
  }
`;

export const replyCommentItem = css`
  padding: 9px 7px 0;

  @media (min-width: 768px) {
    padding: 11px 8px 0;
  }

  @media (min-width: 1024px) {
    padding: 15px 10px 0;
  }
`;

export const replyCommentInfo = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  font-size: 13px;

  @media (min-width: 768px) {
    padding-left: 5px;
    margin-bottom: 7px;
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    padding-left: 10px;
    font-size: 22px;
  }

  div {
    margin-bottom: 0;

    button {
      padding: 1px 2px;

      @media (min-width: 768px) {
        padding: 1px 6px;
      }
    }
  }
`;

export const replyCommentContent = css`
  padding-left: 1px;
  font-size: 15px;

  @media (min-width: 768px) {
    padding-left: 5px;
    font-size: 19px;
  }

  @media (min-width: 1024px) {
    padding-left: 10px;
    font-size: 22px;
  }
`;

export const replyDivideLine = css`
  width: 100%;
  height: 1px;
  margin-top: 6px;
  background-color: #d9d9d9;

  @media (min-width: 768px) {
    margin-top: 10px;
  }

  @media (min-width: 1024px) {
    margin-top: 16px;
  }
`;
