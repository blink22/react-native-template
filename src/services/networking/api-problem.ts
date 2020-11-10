import { ApiResponse } from "apisauce"
import { IGeneralProblem, ResponseProblem } from "./api-types"
/**
 * Attempts to get a common cause of problems from an api response.
 *
 * @param response The api response.
 */
export function getGeneralApiProblem<T, U>(response: ApiResponse<T, U>): IGeneralProblem | null {
  switch (response.problem) {
    case "CONNECTION_ERROR":
      return { problem: ResponseProblem.cannotConnect, temporary: true }
    case "NETWORK_ERROR":
      return { problem: ResponseProblem.cannotConnect, temporary: true }
    case "TIMEOUT_ERROR":
      return { problem: ResponseProblem.timeout, temporary: true }
    case "SERVER_ERROR":
      return { problem: ResponseProblem.server }
    case "UNKNOWN_ERROR":
      return { problem: ResponseProblem.unknown, temporary: true }
    case "CLIENT_ERROR":
      switch (response.status) {
        case 401:
          return { problem: ResponseProblem.unauthorized }
        case 403:
          return { problem: ResponseProblem.forbidden }
        default:
          return { problem: ResponseProblem.rejected }
      }
    case "CANCEL_ERROR":
    case null:
      return null
  }
}
