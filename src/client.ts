import { io } from "socket.io-client";

const socket = io("ws://localhost:7000");

socket.emit("hello from client", { message: "supppp, from client" });
socket.on("Hello from server", (...args) => {
  console.log("message from server", args);
});
