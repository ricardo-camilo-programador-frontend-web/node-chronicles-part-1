import { EventEmitter } from "events";

export const myEmitter = new EventEmitter();

export const welcomeUser = () => {
  console.log("Welcome to the system");
}

export const sayHello = () => {
  console.log("Hello");
}
