# Advance javascript

1. Is it single threaded?
  ```
  Yes, It is a single threaded language.
  ```


> JavaScript is a *lightweight, interpreted, object-oriented* language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well

2. interpreter vs compiler?
  ```
  Interpreter translates just one statement of the program at a time into machine code. Compiler scans the entire program and translates the whole of it into machine code at once. An interpreter takes very less time to analyze the source code

  Interpreter is convert to byte code and compiler is convert to machine code.
  ```

3. What is javascript V8 engine? (need clarification)
   ```  
   V8 engine can understand the JS code and convert it into machine code binary's (011011101). .
   ```

4. Explain about v8 engine?
  * It is written in C++.
  * In 2008, Google released V8, a new JavaScript engine.
  * The old engin is very slow.
  * For the google map, it is very slow because of zoom in and zoom out, that's why google released V8.

5. Who is created first JS engine?
  * Brendan Eich

6. Inside JS engin
  <!-- ![insideEngine](/assets/insideEngine.png) -->
  <img src="assets/insideEngine.png" alt="drawing" style="width:500px; height:auto;"/>

* Parser
  * Lexcial analysis, which is the process of breaking a program into tokens.
* AST (Abstract syntax tree)
  * If you want to see the AST syntax tree, you can use the astexplorer.com
  ```

7. What is Babel?
  ```
  Babel is a JS compiler that takes your modern JS code and returns  browser compatible JS (older JS code).
  ```

8. What is TypeScript?
  ```
  TypeScript is a superset of JavaScript that compiles to clean, readable, and efficient code.
  Once in execution progress, It is compile down to JS
  ```

## My Questions:
* What is run time environment?
* What is the difference between browser and node?
* What is the old engin before V8?
* What is the first JS engine name
* what every one not use interpreter? because it is slow
* what is the difference between high level language and low level language?
* Different between machine code and byte code?












[Markdown reference](https://www.markdownguide.org/basic-syntax/#:~:text=To%20bold%20text%2C%20add%20two,without%20spaces%20around%20the%20letters.&text=I%20just%20love%20**bold%20text**.)