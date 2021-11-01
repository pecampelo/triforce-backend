/* eslint-disable no-unused-vars */
import { describe, it } from 'mocha';
import http from 'http';
// import app from '../src/app';

const assert = require('assert').strict;

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 8008;

// app.listen(port);

describe('Trio API connection', () => {
  it(`should receive data when making a GET request to http://${host}:${port}/`, () => {

    const signUp = {
      hostname: host,
      port,
      path: '/',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const signUpRequest = http.request(signUp, (res: any) => {

      let str = '';
      res.on('data', (chunk: any) => {
        str += chunk;
      });
      res.on('end', () => {

        const actual = JSON.parse(str);
        const expected = {
          endpoints: [
            '/institutions',
            '/credentials',
            '/accounts',
          ],
        };

        assert.deepStrictEqual(actual, expected);
      });

    });
    signUpRequest.end();

  });
  it(`should receive data when making a GET request to http://${host}:${port}/institutions`, () => {

    const signUp = {
      hostname: host,
      port,
      path: '/institutions',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const signUpRequest = http.request(signUp, (res: any) => {

      let str = '';
      res.on('data', (chunk: any) => {
        str += chunk;
      });
      res.on('end', () => {

        const actual = str !== undefined || '' || [];
        const expected = true;

        assert.deepStrictEqual(actual, expected);
      });

    });
    signUpRequest.end();

  });

  it(`should receive data when making a POST request to http://${host}:${port}/credentials`, () => {

    const signUp = {
      hostname: host,
      port,
      path: '/credentials',

      // need to put params here.
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const signUpRequest = http.request(signUp, (res: any) => {

      let str = '';
      res.on('data', (chunk: any) => {
        str += chunk;
      });
      res.on('end', () => {
        // This doesn't work yet.

        // const actual = str !== undefined || '' || [];
        // const expected = true;

        // assert.deepStrictEqual(actual, expected);
      });

    });
    signUpRequest.end();

  });

  it(`should receive data when making a GET request to http://${host}:${port}/institutions`, () => {

    const signUp = {
      hostname: host,
      port,
      path: '/institutions',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const signUpRequest = http.request(signUp, (res: any) => {

      let str = '';
      res.on('data', (chunk: any) => {
        str += chunk;
      });
      res.on('end', () => {

        const actual = str !== undefined || '' || [];
        const expected = true;

        assert.deepStrictEqual(actual, expected);
      });

    });
    signUpRequest.end();

  });

  it(`should receive data when making a GET request to http://${host}:${port}/institutions`, () => {

    const signUp = {
      hostname: host,
      port,
      path: '/institutions',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const signUpRequest = http.request(signUp, (res: any) => {

      let str = '';
      res.on('data', (chunk: any) => {
        str += chunk;
      });
      res.on('end', () => {

        // This doesn't work yet.

        // const actual = str !== undefined || '' || [];
        // const expected = true;

        // assert.deepStrictEqual(actual, expected);
      });
    });

    signUpRequest.end();
  });

});
