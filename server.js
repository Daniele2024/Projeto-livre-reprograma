const app = require('./DELIVERY_DA_BELEZA/src/app');

const PORT = process.env.PORT
console.log(PORT);

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))