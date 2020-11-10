import { ApiResponse } from "apisauce"
import { IObject } from "@skeleton/utils"

export type IPayload = IObject

export interface IApiOkResponse {
  success: true
  payload?: IPayload
}

export interface IApiErrorResponse {
  success: false
  error: string
}

export type IApiResponse = ApiResponse<IApiOkResponse, IApiErrorResponse>

export enum ResponseProblem {
  timeout = "timeout", // Times up.
  cannotConnect = "cannot-connect", // Cannot connect to the server for some reason.
  server = "server", // The server experienced a problem. Any 5xx error.
  unauthorized = "unauthorized", // We're not allowed because we haven't identified ourself. This is 401.
  forbidden = "forbidden", // We don't have access to perform that request. This is 403.
  notFound = "not-found", // Unable to find that resource.  This is a 404.
  rejected = "rejected", // All other 4xx series errors.
  unknown = "unknown", // Something truly unexpected happened. Most likely can try again. This is a catch all.
  badData = "bad-data", // The data we received is not in the expected format.
}

export interface IGeneralProblem {
  problem: ResponseProblem
  temporary?: boolean
}

export interface IOkResponse<T> {
  ok: true
  data?: T
}

export interface IErrorResponse extends IGeneralProblem {
  ok: false
  error: string
}

export type IResponse<T> = IOkResponse<T> | IErrorResponse
