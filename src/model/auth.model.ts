export interface ILoginResponse {
  status: boolean;
  message: string;
  package: {
    data: string;
  };
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IAuthErrorResponse {
  status: string;
  message: string;
  payload: IPayload[];
}

interface IPayload {
  msg: string;
  param: string;
  location: string;
}

export interface IRegisterResponse {
  status: boolean;
  message: string;
  package: {
    data: string;
  };
}

export interface IRegisterRequest {
  fullname: string;
  email: string;
  password: string;
}
