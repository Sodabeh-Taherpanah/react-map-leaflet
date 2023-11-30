import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Tab from "react-bootstrap/Tab";
import { Nav } from "react-bootstrap";

import { Home } from "./routes/home/Home";
import { Buy } from "./routes/buy/Buy";
import ModalMap from "./component/modal/ModalMap";

import "./App.css";

function App() {
  const [key, setKey] = useState("home");

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
                to={`/`}
              >
                Product
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                className={`nav-link ${key === "buy" ? "active" : " deActive"}`}
                eventKey="buy"
                as={Link}
                to={`/`}
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
          <Route path={`/`} element={<Home />} />
          {/* I used ,modal as a route to limit user when map is shown */}
          <Route path="/modal" element={<ModalMap />} />
        </Routes>
      </Tab.Content>
    </React.StrictMode>
  );
}

export default App;
