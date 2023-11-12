const express = require("express");
const cors = require("cors");
const app = express();

//Connect to Database
const connectDB = require("./config/db");
connectDB();

app.use(express.json());
app.use(cors());

const PORT = process.env.port || 5000;

//for testing
app.use("/", (request, response) => response.send("hello"));

//route for generating short url
app.use("/api/genurl", require("./routes/genUrl"));
app.use("/api/geturl", require("./routes/getUrl"));

// Start Express
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));

export default app;
