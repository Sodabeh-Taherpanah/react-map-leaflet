import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../context/SocketContext";

export const Buy = () => {
  const { socket, lastMessage } = useContext(SocketContext);

  const [status, setStatus] = useState(lastMessage);
  //for refreshing page in browser ,best practice is <meta http-equiv="refresh" content="30"> or  window.location.reload(); after 3o sec  when we have api ,but now just we can use interval
  useEffect(() => {
    const interval = setInterval(() => setStatus(lastMessage), 30000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const sendMessage = () => {
    socket.emit("hello!");
  };
  return <div className="p-3">user: tablet note 3 price :3 {status}</div>;
};
