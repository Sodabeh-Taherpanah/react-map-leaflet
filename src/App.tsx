import React, { useMemo, useState, useEffect, useContext } from "react";

import "./App.css";

import { io } from "socket.io-client";

import Header from "./component/header/Header";
import TabComponent from "./component/tab/TabComponent";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Nav } from "react-bootstrap";
import { Home } from "./routes/home/Home";
import { Buy } from "./routes/buy/Buy";

import ModalB from "./component/modal/ModalB";
import { SocketContext } from "./context/SocketContext";

// const socket = io("ws://localhost:8080/", {});

function App() {
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  // });

  const [key, setKey] = useState("home");
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);
  // const [isConnected, setIsConnected] = useState(socket.connected);
  // const [lastMessage, setLastMessage] = useState(null);
  const location = useLocation();
  const background = location.state && location.state.background;

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     setIsConnected(true);
  //   });
  //   socket.on("disconnect", () => {
  //     setIsConnected(false);
  //   });
  //   socket.on("message", (data) => {
  //     setLastMessage(data);
  //   });
  //   return () => {
  //     socket.off("connect");
  //     socket.off("disconnect");
  //     socket.off("message");
  //   };
  // }, []);

  return (
    <React.StrictMode>
      <div className="my-3">
        <Tab.Container
          defaultActiveKey={key}
          onSelect={(key: any) => setKey(key)}
        >
          <Nav>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${
                  key === "home" ? "active" : " deActive"
                }`}
                eventKey="home"
                as={Link}
                to={`/home`}
                // style={key === "home" ? ActiveStyle : inActiveStyle}
              >
                Product
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${key === "buy" ? "active" : " deActive"}`}
                eventKey="buy"
                as={Link}
                to={`/buy`}
                // style={key === "buy" ? ActiveStyle : inActiveStyle}
              >
                Buy
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Tab.Container>
      </div>
      <Tab.Content>
        <Routes>
          <Route path={`/buy`} element={<Buy />} />
          <Route path={`/home`} element={<Home />} />
          <Route path="/modal" element={<ModalB />} />
        </Routes>
      </Tab.Content>
    </React.StrictMode>
  );
}

export default App;
