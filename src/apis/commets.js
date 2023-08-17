import { axiosInstance } from './instance';

// 댓글 생성
export const createReply = async (peedId, reply) => {
  const res = await axiosInstance.post(`/comments/comment/${peedId}`, reply);
  return res;
};

//댓글 삭제
export const deleteReply = async (replyId) => {
  const res = await axiosInstance.delete(`/comments/comment/${replyId}`);
  return res;
};

// 대댓글 생성
export const createUnderReply = async (replyId, reply) => {
  const res = await axiosInstance.post(`/replies/${replyId}`, reply);
  return res;
};
