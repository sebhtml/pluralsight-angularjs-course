// Code goes here

var createObject = function() {
  
  var count = 0;
  
  var _increment = function() {
    
    count += 1;
  };
  
  var _decrement = function() {
    
    count -= 1;
  };
  
  var _getCount = function() {
    
    return count;  
  };
  
  var object = {
    increment: _increment,
    decrement: _decrement,
    getCount: _getCount
  };
  
  
  return object;
};

var object1 = createObject();
var object2 = createObject();

object1.increment();
object1.increment();
object1.increment();
object1.increment();
object1.decrement();

object2.increment();


console.log(object1.getCount());
console.log(object2.getCount());
