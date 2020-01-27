const express = require("express");

const app = express();

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
