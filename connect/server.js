const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const skillRouter = require ("./router/skillRouter.js");
const userRouter = require ("./router/userRouter.js");


app.use(
    cors({
      origin: "*",
    })
  );

app.use("/skill", skillRouter);
app.use("/user", userRouter);



const PORT = 3636;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}...`);
});