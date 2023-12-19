const path = require("path");

const index = (req, res) => {
  res.render(path.resolve(__dirname, "../views/Inicio"));
};

const show = (req, res) => {
//   console.log(req.params);
   res.render (path.resolve(__dirname, "../views/shop/shop"));
 };

const store = (req, res) => {
  console.log(req.body);
  res.send("Admin Crear Producto");
};

const update = (req, res) => {
  console.log(req.body, req.params);
  res.send("Admin Modificar Producto");
};

const destroy = (req, res) => {
  console.log(req.params);
  res.send("Admin Borrar Producto");
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
