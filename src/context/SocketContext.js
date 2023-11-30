import React, {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
} from "react";
import { io } from "socket.io-client";
export const SocketContext = React.createContext();
const socket = io("ws://localhost:8080/", {});

export const SocketProvider = ({ children }) => {
  const [isConnected, setConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);

  const handleOnMessage = (message) => {
    console.log(message);
    // store.dispatch here
  };

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
    });
    socket.on("disconnect", () => {
      setConnected(false);
    });
    socket.on("message", (data) => {
      setLastMessage(data);
    });
    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message");
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
