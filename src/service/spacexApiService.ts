export class SpaceXApiService {
  baseUrl: string;

  constructor() {
    console.log("SPACEX_API_URL:", process.env.NEXT_PUBLIC_SPACEX_API_URL);
    this.baseUrl = process.env.NEXT_PUBLIC_SPACEX_API_URL ?? "";
    if (!this.baseUrl) {
      throw new Error("SPACEX_API_URL is not defined");
    }
  }

  execute = async (url: string, options: RequestInit) => {
    const { credentials, headers, ...rest } = options;
    return fetch(`${this.baseUrl}${url}`, {
      credentials,
      headers,
      ...rest,
    });
  };
}
