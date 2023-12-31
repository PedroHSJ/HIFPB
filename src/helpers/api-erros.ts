import { ValidationError } from "class-validator";

export class ApiError extends Error {
  public readonly statusCode: number;
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class BadResquestError extends ApiError {
  constructor(message: string) {
    super(400, message);
  }
}

export class ValidationApiError extends ApiError {
  constructor(errors: Array<ValidationError>) {
    super(400, JSON.stringify(errors));
  }
}

export class NotFoundError extends ApiError {
  constructor(message: string) {
    super(404, message);
  }
}

export class UnauthorizedError extends ApiError {
  constructor(message: string) {
    super(401, message);
  }
}

export class ForbiddenError extends ApiError {
  constructor(message: string) {
    super(403, message);
  }
}

interface IValidationError {
  target?: Object;
  value?: any;
  property: string;
  children?: ValidationError[];
  constraints: { [type: string]: string };
}

