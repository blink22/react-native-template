import moment, { Moment } from "moment"
import _ from "lodash"

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const parse = (str: string, ...value: string[]) => {
  return str.replace(/%s/g, () => {
    const str = value.shift()
    return str ? str : ""
  })
}

/**
 * Parser to parse any date return from api endpoint response.
 * The idea is to standardize all dates as `moment`
 */
enum DateEndpoint {
  First = "first",
  Second = "second",
  Third = "third",
}

const DATE_ENDPOINTS_FORMAT: Record<DateEndpoint, string> = Object.freeze({
  first: "YYYY-MM-DD HH:mm:ss.SSS Z [UTC]",
  second: "DD/MM/YYYY",
  third: "YYYY-MM-DDTHH:mm:ss",
} as const)

export const DateResponseParser = _.mapValues(DateEndpoint, (key: string) => ({
  parse: (date: string) => moment(date, DATE_ENDPOINTS_FORMAT[key]),
  format: (momentDate: Moment) => momentDate.format(DATE_ENDPOINTS_FORMAT[key]),
}))
