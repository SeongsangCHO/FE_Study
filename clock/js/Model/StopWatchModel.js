const tag = '[StopWatchModel]';

export default {
    data : {},
    init(){
        this.setLocalData("time", 0);
        this.setLocalData("isRunning", false);
    },
    getLocalData(id){
      return localStorage.getItem(id);
    },
  
    setLocalData(id, data){
        if(this.getLocalData(id))
            return tag+'setLocalData';
        return localStorage.setItem(id, data);
    },
    clearLocalData(){
        return localStorage.clear();
    }
  }