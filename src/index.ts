// import { sayHello } from "@utils/hello.ts";
import { convertSecondsToHours } from "@utils/convertSecondsToHours.ts";
import * as os from "os";
import { showPathInfo } from "@utils/pathModule.ts";

const systemUptime = convertSecondsToHours(os.uptime());
// const userInfo = os.userInfo();
// const otherInfo = {
//   name: os.type(),
//   release: os.release(),
//   totalMem: os.totalmem(),
//   freeMem: os.freemem(),
// }

// console.log("userInfo:", userInfo);
// console.log("otherInfo:", otherInfo);
console.log("systemUptime:", systemUptime);

showPathInfo();

// sayHello("Ricardo");
// sayHello("Camillus");
// sayHello("Bloodfallen")


// declare global {
//   var myVariable: string;
// }

// global.myVariable = "Hellow World";

// console.log("myVariable:", myVariable);

// console.log("dirname:", __dirname);

// console.log("filename:", __filename);