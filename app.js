const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/src/views"));

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const mainRoutes = require("./src/routes/mainRoutes");
//const itemRoutes = require("./src/routes/itemRoutes");
const shopRoutes = require("./src/routes/shopRoutes");

app.use(mainRoutes);
//app.use(itemRoutes);
app.use(shopRoutes);

//app.use("item", require("./src/routes/itemRoutes"));
app.use("shop", require("./src/routes/shopRoutes"));

app.use((req, res, next) => {
  res.status(404).send("Ruta no encontrada");
});

const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
