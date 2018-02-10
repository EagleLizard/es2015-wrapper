const Car = require('./Car');
const Simple = require('./Simple');

const wrapper = require('./wrapper');

main();

function main(){
  // testObject();
  testObjectWithProto();
}

function testObject(){
  let simple = new Simple('Bananaman', 'he gon\' getch ya!', 50);
  let WSimple = wrapper(Simple);
  let wSimple = new WSimple('Orangeman', 'he not gettin ya.', 1);
}

function testObjectWithProto(){
  let car = new Car('Honda', 'Civic', 2012);
  let WCar = wrapper(Car);
  let wCar = new WCar('Toyota', 'Corrolla', 2014);
}

function testFunction(){

}