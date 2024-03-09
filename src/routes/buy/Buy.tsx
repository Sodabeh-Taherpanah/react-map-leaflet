import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { SocketContext } from "../../context/SocketContext";
import { useNavigate } from "react-router-dom";

export const Buy = () => {
  const { socket, lastMessage } = useContext(SocketContext);

  const userData = useSelector((state: any) => state.user.userInfo);
  const userProduct = useSelector((state: any) => state.user.userProduct);

  const [user, setUser] = useState(userData);
  const [product, setuserProduct] = useState(userProduct);
  const navigate = useNavigate();
  //for refreshing page in browser ,best practice is <meta http-equiv="refresh" content="30"> or  window.location.reload(); after 3o sec  when we have api ,but now just we can use interval

  useEffect(() => {
    setUser(userData);
  }, userData);

  useEffect(() => {
    setuserProduct(userProduct);
  }, userProduct);

  const sendMessage = () => {
    socket.emit("ordered");
  };
  //this is quick app , in my projects usually i prefer module css when I use bootstrap ,if tailwind inline style  is appropriate
  function ProductCard() {
    return (
      <Card style={{ width: "18rem", marginLeft: 30, paddingTop: 20 }}>
        <Card.Img variant="top" src={userProduct?.image} />
        <Card.Body>
          <Card.Title>{userProduct?.title}</Card.Title>
          <Card.Text>price:{userProduct?.price}</Card.Text>
          <Card.Text>status of product :{lastMessage}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
  function UserCard() {
    return (
      <Card
        style={{
          width: "28rem",
          textAlign: "left",
          border: "none",
          marginLeft: 30,
        }}
      >
        <label className="card-subtitle mt-4">Name: {user?.name}</label>
        <label className="card-subtitle mt-4">Email: {user?.email}</label>
        <label className="card-subtitle mt-4">Address: {user?.address}</label>
        <Button
          style={{
            width: "28rem",
            textAlign: "center",
            height: 50,
            maxWidth: 200,
            marginTop: 70,
          }}
          variant="primary "
          onClick={sendMessage}
        >
          Accept
        </Button>
      </Card>
    );
  }
  return (
    <>
      <div className="row ">
        <UserCard />
        <ProductCard />
      </div>
    </>
  );
};
