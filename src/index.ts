import { sayHello } from "./utils/hello.js";
import * as os from "os";

const systemUptime = os.uptime();
const userInfo = os.userInfo();
const otherInfo = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log("systemUptime:", systemUptime);
console.log("userInfo:", userInfo);
console.log("otherInfo:", otherInfo);


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