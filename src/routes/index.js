const express = requre('express');
const router = express.Router();

const produtoRoutes = require('./produtoRoutes');

// Associa o prefixo /produtos ao arquivo produtoRoutes
router.use('/produtos', produtoRoutes);

// Associação com a rota /usuarios
module.exports = router;