import {END_POINT} from '../util/const.js';

const request = async(url) => {
  try{
    const response = await fetch(url);
    return response.json();
  }catch(error){
    console.error(error);
  }
}

const api = {
  getFileList :  () => {
    return request(`${END_POINT}`);
  },
  getNestedList: (id) =>{
    return request(`${END_POINT}/${id}`)
  }
}
export default api;