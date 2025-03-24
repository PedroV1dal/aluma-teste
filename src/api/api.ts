/* eslint-disable @typescript-eslint/no-explicit-any */
import { FetchResponse } from "./models";

interface ApiClient {
  execute: (baseUrl: string, options: RequestInit) => Promise<Response>;
}

export class ApiService {
  apiService: ApiClient;

  constructor(apiService: ApiClient) {
    this.apiService = apiService;
  }

  public async get<TData>(
    endpoint: string,
    includesCredentials = true,
    query: Record<string, unknown> | undefined = undefined,
    headers: Record<string, string> | undefined = undefined
  ): Promise<FetchResponse<TData>> {
    const url = query
      ? `${endpoint}?${this.encodeQueryString(query)}`
      : `${endpoint}`;
    const response = await this.apiService.execute(url, {
      method: "GET",
      headers: headers,
      credentials: includesCredentials ? "include" : "omit",
    });
    return {
      status: response.status,
      data: (await response.json()) as TData,
    };
  }

  private deepRemoveNullUndefinedEmpty(
    obj: Record<string, any> | null | undefined
  ): Record<string, any> {
    if (obj === null || obj === undefined) {
      return {};
    }

    const target: Record<string, any> = {};
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        if (value.constructor === Object) {
          value = this.deepRemoveNullUndefinedEmpty(value);
          if (!value) return;
        }

        target[key] = value;
      }
    });

    return target;
  }

  private encodeQueryString(params: { [key: string]: any }): string {
    const target: { [key: string]: any } =
      this.deepRemoveNullUndefinedEmpty(params);

    const searchParams = new URLSearchParams();

    Object.entries(target).forEach(([key, value]) => {
      if (Array.isArray(value) || (value && typeof value === "object")) {
        searchParams.append(key, JSON.stringify(value));
      } else if (value !== null && value !== undefined && value !== "") {
        searchParams.append(key, String(value));
      }
    });

    return searchParams.toString();
  }
}
