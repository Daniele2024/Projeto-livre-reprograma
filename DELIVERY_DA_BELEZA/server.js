const app = require('./src/app');



const PORT = process.env.PORT || 3000;
console.log(PORT);

app.listen(PORT, () => console.log(`Servidor está rodando na porta ${PORT}`))
