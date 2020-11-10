import { ENV } from "@skeleton/config"

/**
 * The options used to configure the API.
 */
export interface IApiConfig {
  /**
   * The URL of the api.
   */
  url: string

  /**
   * Milliseconds before we timeout the request.
   */
  timeout: number
}

/**
 * The default configuration for the app.
 */
export const DEFAULT_API_CONFIG: IApiConfig = {
  url: ENV.baseURL,
  timeout: 30000,
}
