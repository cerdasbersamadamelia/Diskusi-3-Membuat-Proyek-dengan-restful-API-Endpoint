import express from 'express';
import { PORT } from './config/constants';
import { userRouter } from './routes';

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to RESTFUL API gateway (by Damelia)");
});
app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`Endpoint is ready and can be access in port ${PORT}`);
});