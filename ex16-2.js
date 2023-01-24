//! BLock 1
function funcA() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
funcA();

//clg a: undefined. a declaration will be hoisted to the top of the function, but it is not yet initialized.

//clg (foo()): 2. function declarations will be hoisted to the top of the function.

//! Block 2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());

//clg(obj.prop.getFullName) : Aurelio De Rosa - the function getFullName is hoisted to the global scope, BUT the "this " in the function refers to the block scope the function is in.

// console.log(test()): undefined, because "this" refers to the object block it's in - it refers to "prop", which is not available outside of prop.



//! Block 3
function funcB() {
  let a = b = 0;
  a++;
  return a;
}
funcB();
console.log(typeof a);
console.log(typeof b); 

// b was declared as a global variable and is accessible outside of the function.

//! Block 4

function funcC() {
  console.log("1");
}
funcC();
function funcC() {
console.log("2");
}
funcC();

// 2 ,2 : function declarations is hoisted up. funcC() is reDeclared , and then bein called twice.

//! Block 5

/* function funcD1() {
  d = 1;
  }
  funcD1();
  console.log(d);
  function funcD2() {
  var e = 1;
  }
  funcD2();
  console.log(e);
  //  console.log(d) :1 because of global scope.
  // console.log(e): e is not defined because it's in the function scope. */

  //! Block 6
  function funcE() {
    console.log("Value of f in local scope: ", f);
    }
    console.log("Value of f in global scope: ", f);
    var f = 1;
    funcE();

    //  first: undefined. f is declared but not assigned (hoisting)
    // then 1 (the second console.log in the oreder from top to bootom), because you call the function after teh variable was assigned.

