import { test, describe } from 'node:test';
import assert from 'node:assert';
import { checkPassword, checkPasswordAndThrowReason } from './passwordChecker.js';

describe('checkPassword', () => {
  test('returns true for valid password', () => {
    assert.strictEqual(checkPassword('ValidPass123'), true);
  });

  test('returns false for non-string input', () => {
    assert.strictEqual(checkPassword(123), false);
    assert.strictEqual(checkPassword(null), false);
    assert.strictEqual(checkPassword(undefined), false);
    assert.strictEqual(checkPassword({}), false);
  });

  test('returns false for password shorter than 8 characters', () => {
    assert.strictEqual(checkPassword('Short1A'), false);
  });

  test('returns false for password longer than 20 characters', () => {
    assert.strictEqual(checkPassword('ThisPasswordIsWayTooLong123456'), false);
  });

  test('returns false for password without lowercase letters', () => {
    assert.strictEqual(checkPassword('PASSWORD123'), false);
  });

  test('returns false for password without uppercase letters', () => {
    assert.strictEqual(checkPassword('password123'), false);
  });

  test('returns false for password without numbers', () => {
    assert.strictEqual(checkPassword('PasswordNoNumbers'), false);
  });
});

describe('checkPasswordAndThrowReason', () => {
  test('returns true for valid password', () => {
    assert.strictEqual(checkPasswordAndThrowReason('ValidPass123'), true);
  });

  test('throws for non-string input', () => {
    assert.throws(() => checkPasswordAndThrowReason(123), {
      message: 'Password must be a string'
    });
  });

  test('throws for password shorter than 8 characters', () => {
    assert.throws(() => checkPasswordAndThrowReason('Short1A'), {
      message: 'Password must be at least 8 characters long'
    });
  });

  test('throws for password longer than 20 characters', () => {
    assert.throws(() => checkPasswordAndThrowReason('ThisPasswordIsWayTooLong123456'), {
      message: 'Password must be at most 20 characters long'
    });
  });

  test('throws for password without lowercase letters', () => {
    assert.throws(() => checkPasswordAndThrowReason('PASSWORD123'), {
      message: 'Password must contain at least one lowercase letter'
    });
  });

  test('throws for password without uppercase letters', () => {
    assert.throws(() => checkPasswordAndThrowReason('password123'), {
      message: 'Password must contain at least one uppercase letter'
    });
  });

  test('throws for password without numbers', () => {
    assert.throws(() => checkPasswordAndThrowReason('PasswordNoNumbers'), {
      message: 'Password must contain at least one number'
    });
  });
});