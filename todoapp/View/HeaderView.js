import View from './View.js'

const HeaderView = Object.create(View);

HeaderView.setup = function (el){
    this.init(el);
    this.titleEl = this.el.querySelector('.header-title');
    this.describeEl = this.el.querySelector('.header-describe');
    this.bindEvent();
    return this;
}


HeaderView.bindEvent = function(){
    this.describeEl.addEventListener('input', e => {
        this.describeEl.style.height = "auto";
        this.describeEl.style.height = this.describeEl.scrollHeight +'px';
    });
    this.titleEl.addEventListener('input', e => {
        this.titleEl.style.height = "auto";
        this.titleEl.style.height = this.titleEl.scrollHeight +'px';
    });
}
export default HeaderView;