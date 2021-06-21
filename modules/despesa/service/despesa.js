const despesaDB = require("../database/_despesa.js");

exports.findDespesa = async function (req, res) {
  const response = await despesaDB.getDespesa(req);
  res.json(response);
};

exports.save = async function (req, res) {

  const response = await despesaDB.save(req);
  res.json(response);
}
