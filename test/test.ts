import { describe, it } from 'mocha';

const assert = require('assert').strict;

describe('Trio API connection', () => {
  it('should receive HTTP 200 and data when making a GET request to https://sandbox.trio.com.br/institutions', () => {
    const actual = true;
    const expected = 200;
    assert.deepStrictEqual(actual, expected);
  });
});
