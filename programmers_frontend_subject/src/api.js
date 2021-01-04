const API_ENDPOINT =
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";
// iyFN2mF8l

async function request(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("error");
    }
  } catch (e) {
    console.log(e);
  }
}

const api = {
  fetchCats: async (keyword) => {
    try {
      const specifies = await request(
        `${API_ENDPOINT}/api/cats/search?q=${keyword}`
      );
      const response = specifies.data.map(
        async (specify) =>{
          return await request(`${API_ENDPOINT}/api/cats/${specify.id}`)}
      );
      const result = await Promise.all(response);
      console.log(result)
      return {
        data:result,
      };
    } catch (e) {
      console.log(e);
    }
  },
};
