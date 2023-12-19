const express = require('express');
const app = express();
const methodOverride = require("method-override");

app.set("view engine", "ejs");
app.set("views", "src/views");

app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended:false}));
app.use(express.json);

const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');

app.use(express.static('public'));

app.use('/',mainRoutes);
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use('/auth',authRoutes);

const PORT = 4000;

app.listen(PORT,() => console.log(`servidor corriendo en http://localhost:${PORT}`));
