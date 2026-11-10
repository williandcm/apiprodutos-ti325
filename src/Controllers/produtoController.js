const produtosModel = require('../models/prdutoModel');

const produtoController = {
    criarProduto: (req, res) =>{
        const { codigo, nome, qtde, preco} = req.body;
        // Validação simples dos campos obrigratórios
        if(!codigo || !nome || !qtde || !preco){
            return res.status(400).json({
                sucesso:false,
                mensagem: "Todos os campos (codigo, nome, qtde, preco) são obrigatórios!"
            })
        }
        //Transformar e calcular os dados
        const nomeMaiusculo = tring(nome).toUpperCase();
        const quantidade = Number(qtde);
        const valorPreco = Number(preco);
        const valorTotal = quantidade * valorPreco;

        const novoProduto ={
        codigo,
        nome: String(nome).toUpperCase(),
        quantidade: Number(qtde),
        preco: Number(preco),
        total: Number(qtde) * Number(preco),
        criadoEm: new Date().toISOString()
        }

        //chama o Model para persistir no arquivo JSON
        const produtoSalvo = produtosModel.salvar(novoProduto);

        // Retorna a resposta HTTP 201 (Created)
        return res.status(201).json({
            sucesso:true,
            mensagem: "Produto cadastrado com sucesso!",
            produto: produtoSalvo
        })
    },
    listarProdutos: (req, res) =>{
        const produtos = produtosModel.buscarTodos();
        return res.json({
            sucesso: true,
            total: produtos.length,
            produtos
        })
    }
}
module.exports = produtoController;