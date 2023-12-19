const path = require("path");

const index = (req, res) => {
  res.render(path.resolve(__dirname, "../views/inicio"));
};

const contact = (rqe, res) => {
  res.render (path.resolve(__dirname, "../views/shop/contact"))
};

const about = (req, res) => res.send('Cargando ruta /about method GET');

const faq = (req, res) => res.send('Cargando ruta /faq method GET');

module.exports = {
  index,
  contact,
  about,
  faq,
};
