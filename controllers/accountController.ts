import { Request, Response } from 'express';
import { Account } from '../db/schemas/account';
import { Transaction } from '../db/schemas/transaction';
import accountRepository from '../repositories/accountRepository';

const sdk = require('api')('@trio/v1#2tcyskkucpmux4');

const client_id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;

sdk.auth(client_id, secret);

async function findByQueryConnectionId(req: Request, res: Response) {

  try {

    const { connection_id } = req.query;

    if (!connection_id) {
      return res.json({ error: 'Please insert a connection_id' });
    }

    const accounts: any = await accountRepository.findByConnectionId(connection_id);

    if (!accounts || ![accounts]) {

      if (!connection_id) {
        return res.json({ error: 'Please make a query' });
      }
      console.log('Accounts not on database! Fetching...');

      await sdk.get('/accounts', { connection_id })
        .then(({ data }: any) => {
          data.forEach(async (account: any) => {
            const newInstitution = new Account(account);
            // eslint-disable-next-line no-unused-vars
            const savedDocument = await newInstitution.save();
          // console.log(savedDocument)
          });
          console.log('Data fetched and saved in database!');
          res.json(data);
        })
        .catch((err: any) => {
          console.log(err);
          return res.json(err);
        });

    } else {
      return res.json(accounts);
    }

  } catch (e) {
    console.log(e);
    return { error: 'Error!' };
  }

}

async function postId(req: Request, res: Response) {

  const { id } = req.params;
  await sdk.post(`/accounts/${id}/transactions`)
    .then(({ data }: any) => res.json(data))
    .catch((err: any) => console.log(err));

}

async function findById(req: Request, res: Response) {
  try {

    const { connection_id } = req.params;
    const accounts = await accountRepository.findByConnectionId(connection_id);

    if (!accounts || ![accounts]) {
      await sdk.post('/accounts', { connection_id })

        .then(({ data }: any) => {

          data.forEach(async (account: any) => {
            const newInstitution = new Transaction(account);
            // eslint-disable-next-line no-unused-vars
            const savedDocument = await newInstitution.save();
            // console.log(savedDocument)
          });
          console.log('Data fetched and saved in database!');
          res.json(data);
        })

        .catch((err: any) => console.log(err));

    }

  } catch (e) {
    console.log(e);
    return { error: 'Error!' };
  }

}

const functions = {
  findByQueryConnectionId,
  findById,
  postId,
};

export default functions;
