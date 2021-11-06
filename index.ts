import express from 'express';
import cors from 'cors';

const app = express();
const router = require('./router');
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
