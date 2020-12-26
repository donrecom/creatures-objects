function fff() {
var person = 'Sereja'
var msg = 'Hello ' + person + '!';
console.log(msg);
document.writeln(msg)

o = Object.create({}, { 
    p: { value: 42 } 
});
var p=p;
// по умолчанию свойства НЕ ЯВЛЯЮТСЯ записываемыми, перечисляемыми или настраиваемыми:
o.p = 24;
o.p;

console.log(o.p);

o2 = Object.create({}, {
    p: {
      value: 42,
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  o2.p = 24
  console.log(o2.p)

creature01 = Object.create({}, { 
    name: { value: "Sereja "} ,
    type: { value: 'human' },
    age : { value: 42 },
});

console.log("Привет " + creature01.type + " " + creature01.name);
}


// more simple syntax

let user = {
    name: "John",
    age: 30,
    sayAge() {
        // "this" is the "current object"
        console.log(this.age);
    }
};

user.sayHi = function() {
    console.log("Hello!");
};

user.age = 31
user.sayAge()
user.sayHi(); // Hello!
