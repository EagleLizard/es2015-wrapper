
module.exports = class Auto{
  constructor(numWheels){
    this._numWheels = numWheels;
  }

  get numWheels(){
    return this._numWheels;
  }
}