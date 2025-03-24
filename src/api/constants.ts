export enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
  DELETE = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  UNAUTHENTICATED = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export const CRUD_STATUS_CODE_SUCCESSFULLY = [
  STATUS_CODE.OK,
  STATUS_CODE.CREATED,
  STATUS_CODE.NO_CONTENT,
];
