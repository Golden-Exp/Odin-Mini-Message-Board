express = require("express");
const path = require("node:path");
app = express();

app.use(express.static(path.join(__dirname, "")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

//app.post("/new", newMessage);

app.listen(3000, () => {
    console.log("my first app live on port number 3000!")
})