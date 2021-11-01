import {
  Request, Response, Router,
} from 'express';

const sdk = require('api')('@trio/v1#2tcyskkucpmux4');

const routes = Router();

const id = '4d4db59e-4a79-45ca-8ea2-acdc8faebccc';
const secret = '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAuS7bCVzyuV6wUMZl5PlgjU2kguWnK4ze68nJU9Fl7TjhqLuM\nJPQYDj/PXzhlH4Li5NxC3zQ0XRDZVouhjS3SyaLwOaYNSBeOejeYkby5rUttT2p2\nP/fe1lSpy4YigWIC8osA0ajXszBnmUuSGHcG5hecVbotekG2t2nNAmh/xt/yeenM\n7PiptzSn14QEpxM3YvyB+hgUiQpVOA3VSoeJ4lqDjGJURrP8Tpk1ukhwW3Ml5kor\ncOvD9uhAbruxfxsJuplw991+NdGPI5rszDWPiLMJzeX7ImmWWNECjGxc7FX637gP\n70ZnyT8+8a5nN+qSf9rPMSuBoFASoH8XLca5FQIDAQABAoIBAQCVjUiprB3+JIFi\nCof5vogCNeUZLVyvaCoT5DeqcF7PkPN1MFmC8nqG73OK4+GO7EZPK6750ZBEZLoR\nEd0bRhmIbAVzmS36vcN74nBdqjuNv299Bm6PRJ/7Gg6yZhZxxPS6ahX0PFZOyVWx\nUH2hMmco5YKFHUFjDbUBNPmy6y/eLFW1sMqQwhpvsnglncK1ANzKrwxhCmmd8m7p\nPtoCEseLAjRdPu39XeclJ02VwdTqbE0RYdMZ7TYIYvewuv1lTE0WJXeMAEOmcgBm\nX56Lgi8A6q8LdT4j3ZzmLRXJ+G76YSIdLPE29Xe06CSbF+v8iMWfKkc8gWvpJ2UR\n2iNRGAA1AoGBAPYYOPodJHuqDNkc8N7tbn9ACQFeqwpfM+uc3+zOMuKlHpsXbfRz\n8naIrzwLt6ffT+05Bqrv2vPcUzDlVSc6VBgcn/9emghrx0Rbc5ohmDH/DDIWZ4/k\nNvew4XWUPdXIR84nCqTH45Q8GxQIYZfKdfd+60rt460VF2gT5lzvwI1TAoGBAMCi\n/tX3txDhnVgAyDmz118srcndms/+ZIjOL2CYPsN31C9PSKVHbRfEsWKrl/3bu2fb\nY265oFUG+7yrHWz4cEZ3wXkjFyp53IWRLsWlwAnNOVsas3ntV18MLzQrYPUHuHab\njfF7vMdmPABK7efxf3LuPxrnGf6GYNDZ3UFUXmr3AoGALwsSWT2Y68rmCdrucK8S\noGCtWAWwzJrGYhPq+mmwcIMABsXDzycbAm2+kcvrn7ugm8h67dJMGLHVdVNho84S\npUlTjI2ZBGMWBIs23g/t+CC5RBnkUi1eFJtLfh6Ic4WFtHLiJf3QE1YqFvpDLbEW\nO+mXMQuoqj2N6+dh8gIi3OECgYBU2bbMAo/FRMtsjvOizv9nsaNfDlh5k0EvLTqb\nHpROvwJcUFzcSEjaNk43+wM400eJ6I20oNjpeuj5YpnUfN3ffDJhLD6w+/pRbvCe\nKHMdHiNMaMdzRkK83/4OyaisZVkwDTaJjopJflOhgV+nUa1kr2JmdDLz9LbCZ6RY\neVQZYwKBgHR+FBso3+JL8Lp+yWOwoGshCI2BW2joVKdsu0UullfOEVfqp/wC0cZW\n80od3R/qR0KND+9KeNuymwUhS9JAvpAzjPXrUGEMEpmWFCSEsR52oB7C7dEUSBbY\nZiqddaTl5U7j5Fsw2/SW0iIr++s5B7CkmNHf5Yyvj7XWmSJc6jyS\n-----END RSA PRIVATE KEY-----\n\n';

sdk.auth(id, secret);

routes.get('/', (req: Request, res: Response) => {
  res.send({
    endpoints: [
      '/institutions',
      '/credentials',
      '/accounts',
      '/transactions',
    ],
  });
  res.end();
});

routes.get('/institutions', async (req: Request, res: Response) => {

  await sdk.get('/institutions')
    .then(({ data }: any) => res.json(data))
    .catch((err: any) => console.log(err));
  res.end();
});

routes.post('/credentials', async (req: Request, res: Response) => {

  const institution_id = '49f351d3-d41b-4276-bfbb-d1f06c8516cd';
  const credentials = {
    branch_number: '3333',
    account_number: '54321-0',
    password: '090807',
    person_type: 'natural_person',

  };

  await sdk.get('/connections', { institution_id, credentials })
    .then(({ data }: any) => res.json(data))
    .catch((err: any) => console.log(err));
  res.end();
});

routes.get('/accounts/:connection_id', async (req: Request, res: Response) => {

  const { connection_id } = req.params;
  await sdk.get('/accounts', { connection_id })
    .then(({ data }: any) => res.json(data))
    .catch((err: any) => console.log(err));
  res.end();
});

routes.post('/accounts/:connection_id/transactions', async (req: Request, res: Response) => {

  const { connection_id } = req.params;
  await sdk.get('/accounts', { connection_id })
    .then(({ data }: any) => res.json(data))
    .catch((err: any) => console.log(err));
  res.end();
});

routes.get('/accounts/:connection_id/transactions', async (req: Request, res: Response) => {

  const { connection_id } = req.params;
  await sdk.get('/connections', { connection_id })
    .then(({ data }: any) => res.json(data))
    .catch((err: any) => console.log(err));
  res.end();
});

export default routes;
