import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = React.createContext();
const socket = io("ws://localhost:8080/", {});

export const SocketProvider = ({ children }) => {
  const [isConnected, setConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  let interval;

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });
    socket.on("disconnect", () => {
      setConnected(false);
    });
    socket.on("message", (data) => {
      //start taking message from server , that indicate status of product
      interval = setInterval(
        () =>
          setLastMessage((prev) => {
            if (prev !== data) return data;
          }),
        30000
      );
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <SocketContext.Provider
      value={{ socket: socket, lastMessage: lastMessage }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
