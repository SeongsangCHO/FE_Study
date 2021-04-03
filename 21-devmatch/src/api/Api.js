const END_POINT = `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/`;

const request = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("ERROR");
    } else {
      return res.json();
    }
  } catch (err) {
    console.error(err);
  }
};

export const api = {
  fetchContent: async () => {
    return await request(`${END_POINT}`);
  },
  fetchContentById: async (id) => {
    return await request(`${END_POINT}${id}`);
  }
};
