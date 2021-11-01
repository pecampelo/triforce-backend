import { Request, Response } from 'express';
import { Credential } from '../db/schemas/credential';

const sdk = require('api')('@trio/v1#2tcyskkucpmux4');

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;

sdk.auth(id, secret);

async function postCredentials(req: Request, res: Response) {

  try {

    const institution_id = '49f351d3-d41b-4276-bfbb-d1f06c8516cd';
    const myCredentials = {
      branch_number: '3333',
      account_number: '54321-0',
      password: '090807',
      person_type: 'natural_person',
    };

    await sdk.post('/connections', { institution_id, credential: myCredentials })

      .then(({ data }: any) => {
        const newInstitution = new Credential(data);
        // eslint-disable-next-line no-unused-vars
        const savedDocument = newInstitution.save();
        // console.log(savedDocument;
        console.log('Data fetched and saved in database!');
        res.json(data);

      })

      .catch((err: any) => console.log(err));

  } catch (e) {
    console.log(e);
    return { error: 'Error!' };
  }

}

const functions = {
  postCredentials,
};

export default functions;
