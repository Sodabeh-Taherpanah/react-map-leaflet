

const io = require("socket.io")({
  cors: {
    origin: ["http://localhost:3000"],
  },
})

var data=["pending","in progress","rejected","delivered"]
io.on("connection", (socket) => {
  console.log(`connect: ${socket.id}`);

  socket.on("hello!", () => {
    console.log(`hello from ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log(`disconnect: ${socket.id}`);
  });
});

io.listen(8080);
let i=0
setInterval(() => {
  
   
    io.emit("message", data[i]);
     i++
     if(i>3) i=0
    
}, 5000);
