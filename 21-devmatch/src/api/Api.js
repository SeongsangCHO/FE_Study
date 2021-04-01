import { END_POINT, FILE_END_POINT } from "../util/const.js";

//1. root 내용 가져오기

//2. 특정디렉토리에 속하는 파일/ 디렉토리 불러오기
//parent가 null이면 root디랙토라임.  1번 API랑 엔드포인트는 같고 마지막 id가 붙음
//따로 나누어야하남

const request = async (url) => {
  try {
    const result = await fetch(url);

    if (!result.ok) {
      throw new Error("ERROR");
    } else {
      //success
    }
  } catch (error) {
    console.error(error);
  }
};

export const api = {
  fetchContent: async () => {
    return await request(`${END_POINT}`);
  },
  fetchContentById: async (id) => {
    return await request(`${END_POINT}/${id}`);
  },
  fetchImage: async (filePath) => {
    return await request(`${FILE_END_POINT}/${filePath}`);
  }
};
