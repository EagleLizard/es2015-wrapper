
module.exports = class Simple {

  constructor(title, message, num){
    this.title = title;
    this.message = message;
    this._num = num;
  }

  get display(){
    return `${title}, ${message}`;
  }

  get num(){
    return this._num;
  }

  set num(val){
    this._num = val;
  }

  charCount(){
    return this.display.split('').length;
  }
}