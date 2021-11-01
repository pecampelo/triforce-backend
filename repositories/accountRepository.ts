/* eslint-disable no-empty */
import { Institution } from '../db/schemas/institution';

async function findByConnectionId(connection_id: any) {

  try {
    const query: any = await Institution.find({ connection_id });
    const promise = query.exec();
    /* This is an issue. Apparently, in Typescript,
    exec is not recognized with types
    and therefore it will always throw an error
    if not catched; beware.

    Remember it is strangely not promise-based,
    so that is why there is no await.
    */
    return promise;
  } catch (e) {
    /* If you would like to see the TypeError
    that it throws, just uncomment:

    console.log(e.stack);
   */
  }
}

const functions = {
  findByConnectionId,
};

export default functions;
