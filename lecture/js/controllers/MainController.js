import FormView from '../views/FormView.js'

const tag = '[MainController]';


/*.on의 첫번째 인자는 등록된 이벤트를 넣어도 되고 커스텀하게 넣어도됨
2번째 인자가 handler함수여서 해당 이벤트 발생시 뒤 함수 호출단계로 이루어져있음.
*/
export default {
  init(){
    console.log(tag, 'init()');
    FormView.setup(document.querySelector('form'))
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm());
      console.log(FormView);
      
    },
  onSubmit(input){
    console.log(tag, input);
  },

  onResetForm(){
    console.log(tag, 'onResetForm()');
    
  }
  
}