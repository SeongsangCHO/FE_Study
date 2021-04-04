const END_POINT = `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev`;

const request = async (url) =>{
  try{
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("ERROR");
    } else{
      return response.json();
    }
  }catch(error){
    console.error(error);
  }
}


export const api = {
  fetchContent: () => {
    return request(`${END_POINT}`);
  },
  fetchContentById : (id) =>{
    return request(`${END_POINT}/${id}`);
  }
}