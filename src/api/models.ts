import { STATUS_CODE } from "./constants";

export interface KnowApiError {
  error: string;
  description: string;
}

export type AsyncData<T> =
  | { status: "not-loaded" }
  | { status: "loading" }
  | { status: "error" }
  | { status: "loaded"; data: T };

export type AsyncForm =
  | {
      status: "not-loaded" | "loading" | "loaded";
    }
  | { status: "error"; message: string };

export type FetchResponse<TData> =
  | {
      status: STATUS_CODE.OK | STATUS_CODE.CREATED;
      data: TData;
    }
  | {
      status:
        | STATUS_CODE.NO_CONTENT
        | STATUS_CODE.UNAUTHORIZED
        | STATUS_CODE.UNAUTHENTICATED
        | STATUS_CODE.DELETE;
      data: null;
    }
  | {
      status: STATUS_CODE.NOT_FOUND;
      data: KnowApiError;
    }
  | {
      status: STATUS_CODE.BAD_REQUEST | STATUS_CODE.INTERNAL_SERVER_ERROR;
      data: { error: string; reason: string };
    };
