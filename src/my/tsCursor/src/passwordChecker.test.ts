import test from 'node:test';
import assert from 'node:assert/strict';
import {
  checkPassword,
  checkPasswordAndThrowReason,
} from './passwordChecker.js';

test('checkPassword: valid password', () => {
  assert.strictEqual(checkPassword('Valid123@'), true);
});

test('checkPassword: non-string input', () => {
  assert.strictEqual(checkPassword(12345678), false);
  assert.strictEqual(checkPassword(null), false);
  assert.strictEqual(checkPassword(undefined), false);
});

test('checkPassword: password shorter than 8 characters', () => {
  assert.strictEqual(checkPassword('V1d!'), false);
});

test('checkPassword: password longer than 20 characters', () => {
  assert.strictEqual(checkPassword('A1!aA1!aA1!aA1!aA1!aA1!'), false);
});

test('checkPassword: missing uppercase letter', () => {
  assert.strictEqual(checkPassword('valid123!'), false);
});

test('checkPassword: missing lowercase letter', () => {
  assert.strictEqual(checkPassword('VALID123!'), false);
});

test('checkPassword: missing number', () => {
  assert.strictEqual(checkPassword('ValidTest!'), false);
});

test('checkPassword: missing special character', () => {
  assert.strictEqual(checkPassword('Valid1234'), false);
});

test('checkPasswordAndThrowReason: valid password', () => {
  assert.strictEqual(checkPasswordAndThrowReason('Valid123@'), true);
});

test('checkPasswordAndThrowReason: non-string input', () => {
  assert.throws(
    () => checkPasswordAndThrowReason(12345678),
    /Password must be a string/
  );
  assert.throws(
    () => checkPasswordAndThrowReason(null),
    /Password must be a string/
  );
  assert.throws(
    () => checkPasswordAndThrowReason(undefined),
    /Password must be a string/
  );
});

test('checkPasswordAndThrowReason: password shorter than 8 characters', () => {
  assert.throws(
    () => checkPasswordAndThrowReason('V1d!'),
    /at least 8 characters/
  );
});

test('checkPasswordAndThrowReason: password longer than 20 characters', () => {
  assert.throws(
    () => checkPasswordAndThrowReason('A1!aA1!aA1!aA1!aA1!aA1!'),
    /less than 20 characters/
  );
});

test('checkPasswordAndThrowReason: missing uppercase letter', () => {
  assert.throws(
    () => checkPasswordAndThrowReason('valid123!'),
    /one uppercase/
  );
});

test('checkPasswordAndThrowReason: missing lowercase letter', () => {
  assert.throws(
    () => checkPasswordAndThrowReason('VALID123!'),
    /one lowercase/
  );
});

test('checkPasswordAndThrowReason: missing number', () => {
  assert.throws(() => checkPasswordAndThrowReason('ValidTest!'), /one number/);
});

test('checkPasswordAndThrowReason: missing special character', () => {
  assert.throws(
    () => checkPasswordAndThrowReason('Valid1234'),
    /one special character/
  );
});

test('checkPasswordAndThrowReason: password must not contain ! character', () => {
  assert.throws(
    () => checkPasswordAndThrowReason('Valid123@!'),
    /must not contain ! character/
  );
});
