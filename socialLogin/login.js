window.onload = function() { 
  init();
}

const init = () => {
  new App(document.querySelector("#App"));
}
class App{
  JAVASCRIPT_KEY = "00743ed6c413ea402f7d277ce57493a6";
  constructor(){
    const JAVASCRIPT_KEY = this.JAVASCRIPT_KEY;
    Kakao.init(JAVASCRIPT_KEY);
    console.log(Kakao.isInitialized());
    this.$loginBtn = document.querySelector('.login');
    this.loginWithKakao.bind(this);
    this.bindEvent();
  }

  loginWithKakao() {
    Kakao.Auth.login({
      success: function(authObj) {
        alert(JSON.stringify(authObj))
      },
      fail: function(err) {
        alert(JSON.stringify(err))
      },
    })
  }
  bindEvent(){
    this.$loginBtn.addEventListener('click', this.loginWithKakao);
  }
}