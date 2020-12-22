const tag = "[View]";

// init은 this객체의 프로퍼티 el에 el값을 할당
// el : el

//emit로 커스텀이벤트 객체를 생성하는데 이떄 event, 데이터를 넣는다.
//해당 객체(this)를 반환하고 메인컨트롤러에서 
//이를 받아서 on메소드를 통해 handler 이벤트를 수행한다.
//handler는 메인에서 구현한다.

/*.on()의 의미 => 메인이든, view이든 특정 이벤트(event)발생시 handler 호출하도록 지정
View에서 submit라는 기존의 이벤트 발생시 prevent하도록 지정하는 것과
메인에서 .emit의 dispatchEvent로 수행된 커스텀이벤트 실행하면
이벤트(e)의 detail에 값을 채우게 되는데 
메인에서는 .on()으로 해당 커스텀이벤트가 발생했을 때 처리하는 handler를 호출해서
두 구역을 각각 나눠서 사용할 수 있음.
View = HTML에서 입력된 데이터를 내부에서 처리
메인 = 처리된 결과물을 FRONT에 출력시키는 역할
*/
export default {
  init(el) {
    if (!el) throw el;
    this.el = el;
    return this;
  },

  on(event, handler) {
    this.el.addEventListener(event, handler);
    return this;
  },

  emit(event, data) {

    const evt = new CustomEvent(event, { detail: data });
    this.el.dispatchEvent(evt);
    return this;
  },

  hide() {
    this.el.style.display = "none";
    console.log('호출');
    return this;
  },

  show() {
    this.el.style.display = "";
    return this;
  },

};
