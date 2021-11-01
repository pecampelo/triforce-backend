/* eslint-disable no-empty */
import { Institution } from '../db/schemas/institution';

async function index() {

  try {
    const query: any = await Institution.find({});
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
  index,
};

export default functions;
