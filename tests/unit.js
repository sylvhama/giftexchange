import {orderByName, toArrayPeople} from '../app/common.js';

const assert = require('chai').assert;

describe('orderByName', () => {
  it('should sort array of people by name', () => {
    const arr = [
      {name: 'xavier'},
      {name: 'Alex'},
      {name: 'Jon'}
    ];
    const expectedRes = [
      {name: 'Alex'},
      {name: 'Jon'},
      {name: 'xavier'}
    ];
    arr.sort(orderByName);
    assert.sameDeepMembers(arr, expectedRes);
  });
});

describe('toArrayPeople', () => {
  it('should create an array from an object', () => {
    const obj = {
      'key1': {name: 'xavier', spouse: '', drawn: '', hasBeenDrawn:false},
      'key2': {name: 'Alex', spouse: '', drawn: '', hasBeenDrawn:false},
    };
    const expectedRes = [
      {key: 'key2', name: 'Alex', spouse: '', drawn: '', hasBeenDrawn:false},
      {key: 'key1', name: 'xavier', spouse: '', drawn: '', hasBeenDrawn:false}
    ];
    const arr = toArrayPeople(obj);

    assert.includeDeepMembers(arr, expectedRes);
  });
});
