const tag = '[View.js]'


export default {
  init(el){
    if(!el) { throw el;}
    this.el = el;
    return this;
  }
}