exports.getDespesas = function (req, res) {
  res.json({
    data: [
      {
        cdDespesa: 1,
        nuMes: "1",
        nuAno: "2021",
        descricao: "Parcela Caixa",
        valor: 400.0,
        dataCadastro: "2021-01-10",
        dataDebito: "2021-01-10",
      },
      {
        cdDespesa: 2,
        nuMes: "1",
        nuAno: "2021",
        descricao: "Abastecimento",
        valor: 200.0,
        dataCadastro: "2021-01-10",
        dataDebito: "2021-01-10",
      },
      {
        cdDespesa: 3,
        nuMes: "1",
        nuAno: "2021",
        descricao: "Academia",
        valor: 76.9,
        dataCadastro: "2021-01-10",
        dataDebito: "2021-01-10",
      },
    ],
    totalPages: 1,
    quantidadeTotalRegistro: 2,
  });
};
