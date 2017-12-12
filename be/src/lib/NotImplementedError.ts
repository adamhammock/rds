export default class NotImplementedError extends Error {
  constructor(message) {
    super(`[NotImplemented]: ${(message ? ` ${message}` : '')}`);
  }
}
