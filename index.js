const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan  = require('morgan');
const extraRoutes = require ('./routes');
const express = require('express')
// const auth = require('./middlewares/auth');
const projectInfo = require('./package.json');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(cors({origin: '*'}));
app.use(express.json());

app.get('/', (_req, res)=>{
    return res.json({
        app: 'ContabilidaApi',
        version: projectInfo.version || '1.0.0',
        description: projectInfo.description || 'API para el manejo de la contabilidad de una empresa'
        
    });
});

app.use('/', extraRoutes);
app.use((__req, res, _next)=>{
    return res.status(404).send({message: 'Service Not Found'});
})

const server = http.createServer(app);

server.listen(port, () =>  {
    console.log(`Server running on port ${port}`)
})