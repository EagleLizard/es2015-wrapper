
const callMap = new Map([
  ['Objects', new Map()],
  ['Functions', new Map()]
]);

module.exports = function wrapper(target){
  return function wrapped(...args){
    //Check to see if the function is being called with new
    let newTarget;
    if(new.target){
      newTarget = new target(...args);
      traverseProto(newTarget);
      return newTarget;
    }else{
      console.log(`${target.name} called as function`);
    }
  }
}

function traverseProto(obj){
  let curr = obj;
  let vals = [];
  while(curr !== null){
    vals.push(Object.entries(Object.getOwnPropertyDescriptors(curr)));
    curr = Object.getPrototypeOf(curr);
  }
  vals.forEach(val=>(console.log(val),console.log('\n\n')));
  return vals;
}