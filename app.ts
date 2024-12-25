import { sayHello } from "./hello.js";

sayHello("Ricardo");
sayHello("Camillus");
sayHello("Bloodfallen")

declare global {
  var myVariable: string;
}

global.myVariable = "Hellow World";

console.log("myVariable:", myVariable);

console.log("dirname:", __dirname);

console.log("filename:", __filename);