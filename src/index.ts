import express from 'express'
import fruitsRouter from './routes/fruits'
import http from 'http';

const app = express()

app.use(express.json())
app.use('/api/fruits', fruitsRouter)

export const server = http.createServer(app);
server.listen(1903, () => {
    console.log(`Server running on port server`);
});



/*COMANDOS PARA ARRANCAR DE CERO:
npx tsc --init
npm i ts-node (luego lo usamos en el package para iniciar "start": "ts-nodesrc/index.ts")
npm i ts-node-dev (luego lo usamos en el package para iniciar "start": "ts-nodesrc/index.ts") reinicia siempre el servidor con los cambios
npm install express
npm install -D @types/express
npm install -D @types/node
*/