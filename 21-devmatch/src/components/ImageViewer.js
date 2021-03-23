import {FILE_END_POINT} from '../util/const.js'

export default class ImageViewer{
  data = null;
  constructor({$App}){
    this.$App =$App;
    this.$modal = document.createElement('div');
    this.$modal.className = "Modal";
    this.$imageViewer = document.createElement('div');
    this.$imageViewer.className = "ImageViewer";
    this.$imageContent = document.createElement('div');
    this.$imageContent.className = "content";
    this.$image = document.createElement('img');
    this.bindEvent();
  }


  closeModalESC(e){
    console.log(e.keyCode);
    if (e.keyCode === 27){
      this.$modal.remove();
    }

  }

  closeClickSide(e){
    console.log(e.target)
    if (e.target === this.$modal){
      this.$modal.remove();
    }

  }
  bindEvent(){
    window.addEventListener('keydown', this.closeModalESC.bind(this));
    this.$modal.addEventListener('click', this.closeClickSide.bind(this));
  }
  init(){


    this.$modal.appendChild(this.$imageViewer);
    this.$imageViewer.appendChild(this.$imageContent);
    this.$imageContent.appendChild(this.$image);
  }
  render(){
    this.init();
    console.log('imageViewer render',this.data)
    this.$image.src = `${FILE_END_POINT}${this.data}`;
    this.$App.appendChild(this.$modal);
  }
  setState(nextData){
    this.data = nextData;
    this.render();
  }
}