# [Advance javascript](https://zerotomastery.io/cheatsheets/javascript-cheatsheet-the-advanced-concepts/?utm_source=udemy&utm_medium=coursecontent)

### 1. Is it single threaded?
  Yes, It is a single threaded language.

> JavaScript is a *lightweight, interpreted, object-oriented* language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well

### 2. interpreter vs compiler?
  Interpreter translates just one statement of the program at a time into machine code. 
  Compiler scans the entire program and translates the whole of it into machine code at once. 
  An interpreter takes very less time to analyze the source code

  Interpreter is convert to byte code and compiler is convert to machine code.

### 3. What is javascript V8 engine? (need clarification)
   V8 engine can understand the JS code and convert it into machine code binary's (011011101). .

### 4. Explain about v8 engine?
  * It is written in C++.
  * In 2008, Google released V8, a new JavaScript engine.
  * The old engin is very slow.
  * For the google map, it is very slow because of zoom in and zoom out, that's why google released V8.

### 5. Who is created first JS engine?
  * Brendan Eich

### 6. Inside JS engin
  <!-- ![insideEngine](/assets/insideEngine.png) -->
  <img src="assets/insideEngine.png" alt="drawing" style="width:500px; height:auto;"/>
  Fig-1

* Parser
  * Lexcial analysis, which is the process of breaking a program into tokens.
* AST (Abstract syntax tree)
  * If you want to see the AST syntax tree, you can use the astexplorer.com

### 7. What is Babel?
  Babel is a JS compiler that takes your modern JS code and returns  browser compatible JS (older JS code).

### 8. What is TypeScript?
  TypeScript is a superset of JavaScript that compiles to clean, readable, and efficient code.
  Once in execution progress, It is compile down to JS

### 9. Heap Memory and Call stack allocation
  * stack used to track the execution line of the program. It is operate in FILO (First In Last Out) order.
  * All the primitive types, like number, Boolean, or undefined will be stored on the stack
  * Heap is the place for reference types like objects, arrays, and functions.

<img src="assets/javascript-fifo-stack-diagram.png" alt="drawing" style="width:50%; height:auto;"/>

fig-2

<img src="assets/javascript-reference-types-stack-vs-heap.png" alt="drawing" style="width:500px; height:auto;"/>

fig-3


### 9.1 Stack Overflow:
  If we keep calling the function nested inside of each other, the stack will keep growing and growing.
  When the stack is full, It is called stack overflow.
  
```js
  function recursion(){
    recursion();
  }
  recursion();
  // Uncaught RangeError: Maximum call stack size exceeded
```
### 10. JIT compiler (JUST IN TIME)
  Compline the Interpreter and the Compiler they have created as a JIT compiler. By referring fig-2
  Basically the Interpreter is convert to Byte code. The `Profiler`  checks the Interpreter continuously, If the code comes as repeated, then it will ask compiler to convert into optimize the code.

  * Basically javascript is interpreted language. But by writing the code we can use compiler as well

### 11. Optimize code
  1. Inline catching
```js
  function findUser(user){
    return `fount ${user.firstName} ${user.lastName}`;
  }

  const userData = {
    firstName: 'Sree',
    lastName: 'Kannan'
  }

  findUser(userData);
  /*
    Once run the code, findUser(userData) function becomes  `fount ${user.firstName} ${user.lastName}`;
  */
```

### 12. What is Anonymous?


### 12.1 What is execution context?
<img src="assets/global_execution_context.png" alt="drawing" style="width:500px; height:auto;"/>

Whenever we are run the js file, first the global execution context is created. Global execution context provides the global object `window` and the `this` object. (basically `window` and `this` are the same)

  * It is create a context when function is executing.
  * It is create a context when variable is declared.
  * It is create a context when variable is assigned.
  * It is create a context when variable is referenced.
  
### 13. Garbage collection?
<img src="assets/garbage_collection.png" alt="drawing" style="width:50%; height:auto;"/>

In above image, the pink lines are stack and boxes are heap. If the stack is not pointing any memory, then it will removed from the heep memory.

It is automatic process of removing the unused data. If we are declared some variable inside the function, once the function is executed, the variable will be removed from the memory. It is happening automatically, It is called as a Garbage collection.

### 14. Memory leaks

Here we are created the infinite loop, the array value get increase. In one particular point of time it is exceed the memory. It is called as memory leaks.

```js
let array = [];
// infinite loop
for(let i = 5; i > 1; i++){
  array.push(i-1);
}
```

Major Reason for Memory leaks
  * To many Global variables
  * Keep Adding the Event listeners and forgot to remove later 
  * SetInterval and setTimeout (unless we clear the interval or timeout function the data will not be remove from the memory)

### 15. Web API
Which all are predefined functions this all are called as a web API and they are working as a asynchronous.
```js
window  // type window, which all are functions comes, they all are web api
```
### 16. Event loop and Callback Queue
<img src="assets/Eventloop.png" alt="drawing" style="width:50%; height:auto;"/>

```js
console.log("1"); // stack execution
setTimeout(() => {  // move to the web api
  console.log("2"); // move to callback queue
}, 0);
console.log("3"); // stack execution

** Output:
1
3
2
```
[Link to view the demo](http://latentflip.com/loupe)

[Line to view the video tutorial](https://www.udemy.com/course/advanced-javascript-concepts/learn/lecture/13760086#overview)

  * First stack will execute the console.log("1");
  * Next line there is setTimeout function, then stack move this into web api to execute. web api can execute only there own function. then it will move to next line. that is console.log("2"); this console not a web api own function. so it is move this into `callback queue` ask stack to execute that line.
  * Then stack will move to next line, console.log("3") and execute it.;
  * Once all the stack is executed. after that only callback queue will execute.
  * Event loop is move the callback queue into stack one by one. (If the stack is empty, then only its moves callback queue into stack)

### 16. Lexical Environment
Lexical environment is the environment where the variable or functions is declared.
The very first lexical environment is the global environment.

```js
function foo(){
  var a = 1;
  function bar(){
    var b = 2;
    function baz(){
      var c = 3;
      console.log(a, b, c);
    }
    baz(); // Lexical environment of baz is bar()
  }
  bar();  // Lexical environment of bar is foo()
}
foo();  // Lexical environment of foo is global
```
### 17. Hoisting
Hoisting is a process of moving the variable declaration to the top of the function. Basically hoisting happens for var variable and the normal function. so it is allocated the memory in the beginning itself.

```js
function foo(){
  console.log(a); // undefined
  var a = 1;
}
foo();
/*
Here a is undefined, because the variable declaration is moved to the top of the function.
*/
```

### 18. Function expression and function declaration

```js
// Function expression
var sing2 = function(){
  console.log("Lets dance");
}

// Function declaration
function sing(){
  console.log("Lets dance ohhh la la la");
}
```
  






## My Questions:
* What is run time environment?
* What is the difference between browser and node?
* What is the old engin before V8?
* What is the first JS engine name
* what every one not use interpreter? because it is slow
* what is the difference between high level language and low level language?
* Different between machine code and byte code?



## Info:
1. How to open snippet in chorme?
  * Inspect the chorme
  * Select source tab
  * In side nav bar Click >> this button and select the snippet
  * Click new snippet
  * write your code
  * run the code ctrl + r








[Markdown reference](https://www.markdownguide.org/basic-syntax/#:~:text=To%20bold%20text%2C%20add%20two,without%20spaces%20around%20the%20letters.&text=I%20just%20love%20**bold%20text**.)



const name = "kannan"
debugger;
const age = 20