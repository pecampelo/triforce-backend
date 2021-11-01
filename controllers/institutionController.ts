/* eslint-disable no-unused-vars */
import { Request, Response } from 'express';
import { Institution } from '../db/schemas/institution';
import institutionRepository from '../repositories/institutionRepository';

const sdk = require('api')('@trio/v1#2tcyskkucpmux4');

const id = process.env.CLIENT_ID;
const secret = process.env.CLIENT_SECRET;

sdk.auth(id, secret);

async function index(req: Request, res: Response) {

  try {

    const institutions: any = await institutionRepository.index();

    if (!institutions || ![institutions]) {
      console.log('Institutions not on database! Fetching...');

      await sdk.get('/institutions')

        .then(async ({ data }: any) => {

          data.forEach(async (institution: any) => {
            const newInstitution = new Institution(institution);
            const savedDocument = await newInstitution.save();
            // console.log(savedDocument)
          });

          console.log('Data fetched and saved in database!');
          res.json(data);
        })

        .catch((err: any) => {
          console.log(err);
          return null;
        });

    } else {
      return res.json(institutions);
    }

  } catch (e) {
    console.log(e);
    return { error: 'Error!' };
  }
}

const functions = {
  index,
};

export default functions;
