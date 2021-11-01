import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

require('dotenv').config();

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8008;

const app = express();

async function mongo() {
  await mongoose.connect('mongodb://localhost:27017')
    .then(() => console.log('Connected to database'))
    .catch((err: any) => console.error('Failed to connect to database', err));
}

mongo();

export default mongo;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Server is listening on http://${host}:${port}`);
});
