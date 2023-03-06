export class HttpException extends Error {
  statusCode: number;
  errorMessage: string;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorMessage = message;
  }
}
