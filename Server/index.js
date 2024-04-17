const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const productsroutine = require("./routes/pd_routes")
require("dotenv").config();
app.use(cors());

// Body Parser
app.use(cors());
app.use(express.json());

// Use the products routes
app.use('/', productsroutine);

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
});
