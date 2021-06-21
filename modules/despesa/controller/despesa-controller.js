/* eslint-disable @typescript-eslint/no-var-requires */
const express = require("express");
const router = express.Router();

//##############
const despesas = require("../service/despesa");

router.get("/v1/despesa", despesas.findDespesa);
router.post("/v1/despesa/save", despesas.save);

module.exports = router;