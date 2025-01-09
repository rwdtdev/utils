import { getObjectKeys } from './getObjectKeys';

console.log(3);
const obj = { a: 3, b: 'sdaf', c: false };
const keys = getObjectKeys(obj);
const values = keys.map((key) => obj[key]);
console.log('🚀 ~ keys:', keys, 'values', values);
