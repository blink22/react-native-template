import { IEndpoint, IMapper } from "./endpoint"

const ILoginMapper: IMapper<ILoginResponse> = (data: { auth_token: string }) => {
  return { token: data.auth_token }
}

export const LoginEndpoint: IEndpoint<ILoginData, ILoginResponse> = Object.freeze({
  path: "auth/login",
  method: "POST",
  mapper: ILoginMapper,
})

export const RegisterEndpoint: IEndpoint<IRegisterData, IRegisterResponse> = Object.freeze({
  path: "auth/register",
  method: "POST",
})

export interface ILoginData {
  email: string
  password: string
}

export interface ILoginResponse {
  token: string
}

export interface IRegisterData {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface IRegisterResponse {
  ok: boolean
  status: string
}
