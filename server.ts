const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
})

var data=["pending","in progress","rejected","delivered"]


io.on("connection", (socket) => {
 
  console.log(`connect: ${socket.id}`);
  socket.on("ordered", () => {
    //just after clicking on accept button inside buy page & sending 'ordered' message, server start to sending state data one by one every 5 sec ,it is not real project & admin of shop should change the state

    let i=0
    setInterval(() => {
      io.emit("message", data[i]);
       i++
       if(i>3) i=0;
      
  }, 5000);
  });

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });
});

io.listen(8080);


