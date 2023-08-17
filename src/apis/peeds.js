import { axiosInstance } from './instance';

// 피드 전체 조회
export const getPeedsAll = async () => {
  const res = await axiosInstance.get('/peeds');
  return res;
};

// 피드 생성
export const createPeed = async (peed) => {
  const res = await axiosInstance.post('/peeds/peed', peed);
  return res;
};
