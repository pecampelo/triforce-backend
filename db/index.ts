import mongoose from 'mongoose';

require('dotenv').config({ path: '../env' });

async function mongo() {
  await mongoose.connect('mongodb://0.0.0.0:27017/')
    .then(() => console.log('Connected to database'))
    .catch((err: any) => console.error('Failed to connect to database', err));
}

export default mongo;
