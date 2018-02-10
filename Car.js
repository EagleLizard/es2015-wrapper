const Auto = require('./Auto');

module.exports = class Car extends Auto{
  constructor(make, model, year){
    super(4);
    this.make = make;
    this.model = model;
    this.year = year;
  }

  get type(){
    return [this.make, this.model, this.year].join(' ');
  }
}