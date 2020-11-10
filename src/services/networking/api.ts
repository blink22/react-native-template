import { IApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import { ApisauceInstance, create } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { IResponse, ResponseProblem, IApiResponse, IApiErrorResponse, IPayload } from "./api-types"
import { IEndpoint, IMapper } from "./endpoints"
import { parse } from "./api-utils"

type TokenType = string | null

export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  private apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  private config: IApiConfig

  /**
   * Current user session token.
   */
  private token: TokenType

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static DEFAULT_MAPPER: IMapper<any> = (data: IPayload) => data

  public constructor(config: IApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
    this.setup()
  }

  /**
   * Call the endpoint and returns the response data if call is made successfully or error object otherwise.
   *
   * @example
   * let response: IResponse<IRegisterResponse> = yield call(api.request, RegisterEndpoint, {
   *     firstName: "Tester",
   *     lastName: "Tester",
   *     email: "test@gmail.com",
   *     password: "123456",
   *     purpose: "Travel",
   *  })
   *
   *   if (response.ok) {
   *     let data = response.data
   *     // data of type `IRegisterResponse` contains the data exist in the payload api response.
   *   } else {
   *     // `response` represents error object that contains problem code, error message and temporary flag.
   *   }
   *
   * @param endpoint endpoint to request
   * @param data parameters for `GET` requests and data to upload for `POST` requests
   * @param mapper (optional) function to map the api payload data to another object.
   *               Useful if we want to change object keys or make any transforms on the values.
   * @return response of type `IResponse<TResponse>` that may be actual
   */
  public request = async <TData, TResponse>(
    endpoint: IEndpoint<TData, TResponse>,
    data: TData,
    mapper = endpoint.mapper
  ): Promise<IResponse<TResponse>> => {
    const { path, pathParams } = endpoint
    const fullPath = pathParams ? parse(path, ...pathParams) : path
    switch (endpoint.method) {
      case "GET":
        return await this.get<TData, TResponse>(fullPath, data, mapper)
      case "POST":
        return await this.post<TData, TResponse>(fullPath, data, mapper)
    }
  }

  private get = async <TParams extends {}, TResponse>(
    endpoint: string,
    params?: TParams,
    mapper?: IMapper<TResponse>
  ): Promise<IResponse<TResponse>> => {
    const reqMapper = mapper ? mapper : Api.DEFAULT_MAPPER
    const response: IApiResponse = await this.apisauce.get(endpoint, params, {
      headers: { ...this.tokenHeader },
    })
    return this.handleApiResponse(response, reqMapper)
  }

  private post = async <TData extends {}, TResponse>(
    endpoint: string,
    bodyData: TData,
    mapper?: IMapper<TResponse>
  ): Promise<IResponse<TResponse>> => {
    const reqMapper = mapper ? mapper : Api.DEFAULT_MAPPER
    const response: IApiResponse = await this.apisauce.post(endpoint, bodyData, {
      headers: { ...this.tokenHeader },
    })
    return this.handleApiResponse(response, reqMapper)
  }

  public getURL(endpoint: string): string {
    return this.config.url + "/" + endpoint
  }

  public setURL(baseURL: string): void {
    this.config.url = baseURL
  }

  public getToken(): TokenType {
    return this.token
  }

  public setTimeout(timeout: number): void {
    this.config.timeout = timeout
  }

  public setToken(token: TokenType): void {
    this.token = token
  }

  public removeToken(): void {
    this.token = null
  }

  private setup(): void {
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
    this.token = null
  }

  private get tokenHeader(): {} {
    return this.token ? { Authorization: `Bearer ${this.token}` } : {}
  }

  private handleApiResponse<TResponse>(
    response: IApiResponse,
    mapper: IMapper<TResponse>
  ): IResponse<TResponse> {
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) return { ok: false, ...problem, error: response.originalError.message }
    }

    if (!response.data || !response.data.success) {
      const data = response.data as IApiErrorResponse
      const error = data.error
      return { ok: false, problem: ResponseProblem.badData, error }
    }

    const body = response.data.payload
    if (body === undefined) return { ok: true }

    const data = mapper(body)
    return data
      ? { ok: true, data }
      : {
          ok: false,
          problem: ResponseProblem.badData,
          error: "Failed in mapping the response data.",
        }
  }
}
