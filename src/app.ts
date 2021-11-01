/* eslint-disable import/first */

import express from 'express';
import path from 'path';

require('dotenv').config({ path: path.join('../.env') });

import mongo from '../db';

import routes from './routes';

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8008;

const app = express();
app.use(express.json());
app.use(routes);

mongo();

setTimeout(() => {
  app.listen(port, () => {
    console.log(`App is listening on http://${host}:${port}\n`);
  });
}, 2000);
