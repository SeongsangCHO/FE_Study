const tag = '[View.js]'


export default {
  init(el){
    if(!el) { throw el;}
    this.el = el;
    return this;
  },
  on(event, handler){
    this.el.addEventListener(event, handler);
    return this;
  },
  emit(event, data){
    /*특정 event로 호출시,
     객체의 detail 프로퍼티에 data추가 후
     해당 el에 반환.
     */
    const evt = new CustomEvent(event, {detail : data});
    this.el.dispatchEvent(evt);
    return this;
  },
  show(){
    this.el.style.display = ""
    return this;
  },
  hide(){
    this.el.style.display = "none"
    return this;
  },
  setStyle(styles){
    for(let property in styles){
      this.el.style[property] = styles[property]; 
    }
    return this;
  }
}